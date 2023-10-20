import Env from '@ioc:Adonis/Core/Env'
import TaskDTO from 'App/Models/TaskDTO'
import TaskDataDTO from 'App/Models/TaskDataDTO'
import TaskDetailsDTO from 'App/Models/TaskDetailsDTO'
import axios from 'axios'

export default class JiraService {
  username = Env.get('JIRA_USER')
  password =
  Env.get('JIRA_TOKEN')
  basicAuth = 'Basic ' + btoa(this.username + ':' + this.password)

  public async getUserDataTasks(
    project: String,
    user: String,
    dataInicial: String,
    dataFinal: String
  ): Promise<TaskDTO[]> {
    var issues: String[] = await this.getProjectTasks(project, dataInicial, dataFinal)

    var retorno: TaskDTO[] = []

    for (var issue of issues) {
      var data: TaskDataDTO = await this.getTaskData(issue, null, null)

      for (var userTask of data.usuariosEnvolvidos) {
        if (userTask.toLowerCase().indexOf(user.toLowerCase()) >= 0) {
          retorno.push({ task: issue, data: data })
          break
        }
      }
    }

    return retorno
  }

  public async getProjectTasks(
    project: String | null,
    dataInicial: String,
    dataFinal: String
  ): Promise<String[]> {
    const headers = { Accept: 'application/json', Authorization: this.basicAuth }

    var projectJql: String = project ? `project = "${project}" AND ` : ''
    var startAt = 0
    var lenght = null
    var tasksList: String[] = []

    while(lenght == null || lenght > 0) {

      const url = `https://simlabs.atlassian.net/rest/api/3/search?maxResults=100&startAt=${startAt}&jql=${projectJql}statusCategoryChangedDate >= ${dataInicial} AND statusCategoryChangedDate <= ${dataFinal}`

      var response = await axios({ method: 'get', url: url, headers: headers })

      if (response.status != 200) {
        console.log(response)
        throw new Error('Projeto não encontrado')
      }

      response.data.issues.forEach((status: { key: String }) => {
        tasksList.push(status.key)
      })

      startAt+=100;
      lenght = response.data.issues.length
      console.log(lenght)
    }

    console.log(tasksList.length)

    return tasksList
  }

  public async getTask(issue: String): Promise<TaskDetailsDTO> {
    const headers = { Accept: 'application/json', Authorization: this.basicAuth }

    const url = `https://simlabs.atlassian.net/rest/api/3/issue/${issue}`

    var response = await axios({ method: 'get', url: url, headers: headers })

    if (response.status != 200) {
      throw new Error('Task não encontrada')
    }

    const descricao =  response.data.fields.summary
    const tipo = response.data.fields.issuetype.name;
    const criacao = response.data.fields.created

    return {descricao: descricao, tipo: tipo, criacao: criacao}

  }

  public async getTaskData(task: String, dataInicioFiltro:Date|null, dataFimFiltro:Date|null): Promise<TaskDataDTO> {

    const taskDetail = await this.getTask(task)

    const headers = { Accept: 'application/json', Authorization: this.basicAuth }

    const url = `https://simlabs.atlassian.net/rest/api/3/issue/${task}/changelog`
    var response = await axios({ method: 'get', url: url, headers: headers })

    if (response.status != 200) {
      throw new Error('Task não encontrada')
    }

    var lastTime = new Date(taskDetail.criacao.toString()).getTime()
    var firstProgress = true
    var qtdRetrabalho = 0
    var tempoRetrabalho = 0
    var tempoTotal = new Date(taskDetail.criacao.toString()).getTime()
    var done = false
    var mapTempos = new Map()
    var mapTemposRetrabalho = new Map()
    var listHist: { STATUS: String; TEMPO: number; TEMPO_STRING: String }[] = []
    var listUsuariosEnvolvidos: String[] = []
    var dataInicio: Date | null = new Date(taskDetail.criacao.toString())
    var dataFim: Date | null = null
    var tempoDeployProd = 0
    var qtdQA = 0
    var qtdConclusoes = 0

    // To Do
    // In Progress
    // Done
    // AGUARDANDO TESTE
    // EM TESTE
    // Aguardando Deploy Homologação
    // Code Review
    // Aguardando Deploy Produção

    response.data.values.forEach((element: { id: String; items: []; created: String }) => {
      element.items.forEach((item: { fieldId: String; fromString: String; toString: String }) => {

        //if(dataInicioFiltro == null || dataFimFiltro == null || (dataInicioFiltro <= new Date(element.created.toString()) && dataFimFiltro >= new Date(element.created.toString()))) {

          if (item.fieldId == 'assignee') {
            if (
              listUsuariosEnvolvidos.indexOf(item.toString) < 0 &&
              item.toString &&
              item.toString != 'SIMlabs'
            ) {
              listUsuariosEnvolvidos.push(item.toString)
            }
          } else if (item.fieldId == 'status') {
            if (!dataInicio) {
              //dataInicio = new Date(element.created.toString())
            }

            if (item.toString.toUpperCase() == 'IN PROGRESS') {
              if (firstProgress) {
                tempoTotal = new Date(element.created.toString()).getTime()
                firstProgress = false
              } else {
                if (tempoRetrabalho == 0) {
                  tempoRetrabalho = new Date(element.created.toString()).getTime()
                }
                qtdRetrabalho++
              }
            } else if (item.toString.toUpperCase() == 'AGUARDANDO DEPLOY PRODUÇÃO' && tempoRetrabalho > 0) {
              tempoDeployProd = new Date(element.created.toString()).getTime()
            } else if (item.toString.toUpperCase() == 'DONE') {
              dataFim = new Date(element.created.toString())
              done = true
            } else if (item.toString.toUpperCase() == 'EM TESTE') {
              qtdQA++;
            }

            var timeIn = 0
            timeIn = new Date(element.created.toString()).getTime() - lastTime
            lastTime = new Date(element.created.toString()).getTime()
            var tempoStatus = mapTempos.get(item.fromString.toUpperCase())
            if (!tempoStatus) {
              tempoStatus = 0
            }
            mapTempos.set(item.fromString.toUpperCase(), tempoStatus + timeIn)

            if(tempoRetrabalho > 0) {
              if (((item.toString.toUpperCase() == 'EM TESTE' || item.toString.toUpperCase() == 'AGUARDANDO TESTE') && qtdQA > 1) || (item.toString.toUpperCase() != 'EM TESTE' && item.toString.toUpperCase() != 'AGUARDANDO TESTE')) {
                var tempoStatus = mapTemposRetrabalho.get(item.fromString.toUpperCase())
                if (!tempoStatus) {
                  tempoStatus = 0
                }
                mapTemposRetrabalho.set(item.fromString.toUpperCase(), tempoStatus + timeIn)
              }
            }

            listHist.push({ STATUS: item.fromString, TEMPO: timeIn, TEMPO_STRING: this.convertMsToTime(timeIn) })
          }
        //}
      })
    })

    if (!done) {
      tempoTotal = new Date().getTime() - tempoTotal
      if(tempoRetrabalho > 0) {
        tempoRetrabalho = new Date().getTime() - tempoRetrabalho;
      }
    } else {
      tempoRetrabalho = tempoDeployProd - tempoRetrabalho;
      tempoTotal = dataFim!.getTime() - tempoTotal
      qtdConclusoes++;
    }

    var tempoPorStatus = {
      TODO: mapTempos.get('TO DO'),
      ANDAMENTO: mapTempos.get('IN PROGRESS'),
      REVIEW: mapTempos.get('CODE REVIEW'),
      DEPLOY_HOMOL: mapTempos.get('AGUARDANDO DEPLOY HOMOLOGAÇÃO'),
      AGUARDANDO_TESTE: mapTempos.get('AGUARDANDO TESTE'),
      TESTE: mapTempos.get('EM TESTE'),
      DEPLOY_PROD: mapTempos.get('AGUARDANDO DEPLOY PRODUÇÃO'),
    }

    var tempoPorStatusString = {
      TODO: this.convertMsToTime(mapTempos.get('TO DO')),
      ANDAMENTO: this.convertMsToTime(mapTempos.get('IN PROGRESS')),
      REVIEW: this.convertMsToTime(mapTempos.get('CODE REVIEW')),
      DEPLOY_HOMOL: this.convertMsToTime(mapTempos.get('AGUARDANDO DEPLOY HOMOLOGAÇÃO')),
      AGUARDANDO_TESTE: this.convertMsToTime(mapTempos.get('AGUARDANDO TESTE')),
      TESTE: this.convertMsToTime(mapTempos.get('EM TESTE')),
      DEPLOY_PROD: this.convertMsToTime(mapTempos.get('AGUARDANDO DEPLOY PRODUÇÃO')),
    }

    var tempoRetrabalhoPorStatus = {
      TODO: mapTemposRetrabalho.get('TO DO'),
      ANDAMENTO: mapTemposRetrabalho.get('IN PROGRESS'),
      REVIEW: mapTemposRetrabalho.get('CODE REVIEW'),
      DEPLOY_HOMOL: mapTemposRetrabalho.get('AGUARDANDO DEPLOY HOMOLOGAÇÃO'),
      AGUARDANDO_TESTE: mapTemposRetrabalho.get('AGUARDANDO TESTE'),
      TESTE: mapTemposRetrabalho.get('EM TESTE'),
      DEPLOY_PROD: mapTemposRetrabalho.get('AGUARDANDO DEPLOY PRODUÇÃO'),
    }

    var tempoRetrabalhoPorStatusString = {
      TODO: this.convertMsToTime(mapTemposRetrabalho.get('TO DO')),
      ANDAMENTO: this.convertMsToTime(mapTemposRetrabalho.get('IN PROGRESS')),
      REVIEW: this.convertMsToTime(mapTemposRetrabalho.get('CODE REVIEW')),
      DEPLOY_HOMOL: this.convertMsToTime(mapTemposRetrabalho.get('AGUARDANDO DEPLOY HOMOLOGAÇÃO')),
      AGUARDANDO_TESTE: this.convertMsToTime(mapTemposRetrabalho.get('AGUARDANDO TESTE')),
      TESTE: this.convertMsToTime(mapTemposRetrabalho.get('EM TESTE')),
      DEPLOY_PROD: this.convertMsToTime(mapTemposRetrabalho.get('AGUARDANDO DEPLOY PRODUÇÃO')),
    }

    var descricao: String = taskDetail.descricao

    return {
      descricao: descricao,
      concluida: done,
      tipo: taskDetail.tipo,
      tempoTotal: tempoTotal,
      tempoTotalString: this.convertMsToTime(tempoTotal),
      quantidadeRetornos: qtdRetrabalho,
      tempoRetrabalho: tempoRetrabalho,
      tempoRetrabalhoString: this.convertMsToTime(tempoRetrabalho),
      tempoRetrabalhoPorStatus: tempoRetrabalhoPorStatus,
      tempoRetrabalhoPorStatusString: tempoRetrabalhoPorStatusString,
      dataInicio: dataInicio,
      dataFim: dataFim,
      usuariosEnvolvidos: listUsuariosEnvolvidos,
      tempoPorStatus: tempoPorStatus,
      tempoPorStatusString: tempoPorStatusString,
      historicoCompleto: listHist,
    }
  }

  async projectDataTasks(project: String,user:String|null, dataInicial:String, dataFinal:String) {
    var tasksList: String[] = await new JiraService().getProjectTasks(project, dataInicial, dataFinal);

    var tasks:TaskDTO[] = [];

    var dataInicioFiltro = new Date(dataInicial.toString());
    var dataFimFiltro = new Date(dataFinal.toString());

    var qtdTarefas = 0;
    var qtdTarefasRetrabalho = 0;
    var qtdTarefasBugs = 0;
    var qtdTarefasBugsRetrabalho = 0
    var qtdTarefasMelhoria = 0;
    var qtdTarefasMelhoriaRetrabalho = 0;
    var tempoTarefasBugs = 0
    var tempoTarefasMelhoria = 0
    var tempoTarefas = 0
    var tempoRetrabalho = 0
    var tempoRetrabalhoTarefasBug = 0
    var tempoRetrabalhoTarefasMelhoria = 0
    var tempoPorStatus= {TODO:0, ANDAMENTO:0,REVIEW:0, DEPLOY_HOMOL:0,AGUARDANDO_TESTE:0,TESTE:0,DEPLOY_PROD:0}
    var tempoPorStatusString= {}
    var tempoRetrabalhoPorStatus= {TODO:0, ANDAMENTO:0,REVIEW:0, DEPLOY_HOMOL:0,AGUARDANDO_TESTE:0,TESTE:0,DEPLOY_PROD:0}
    var tempoRetrabalhoPorStatusString= {}
    var qtdRetornosTarefas = 0;
    var qtdConcluidas = 0;

    var tempoPorStatusTODO = 0
    var tempoPorStatusANDAMENTO = 0
    var tempoPorStatusREVIEW = 0
    var tempoPorStatusDEPLOY_HOMOL = 0
    var tempoPorStatusAGUARDANDO_TESTE = 0
    var tempoPorStatusTESTE = 0
    var tempoPorStatusDEPLOY_PROD = 0

    var tempoRetrabalhoPorStatusTODO = 0
    var tempoRetrabalhoPorStatusANDAMENTO = 0
    var tempoRetrabalhoPorStatusREVIEW = 0
    var tempoRetrabalhoPorStatusDEPLOY_HOMOL = 0
    var tempoRetrabalhoPorStatusAGUARDANDO_TESTE = 0
    var tempoRetrabalhoPorStatusTESTE = 0
    var tempoRetrabalhoPorStatusDEPLOY_PROD = 0


    for(const task of tasksList) {
      var data: TaskDataDTO = await new JiraService().getTaskData(task, dataInicioFiltro, dataFimFiltro)

      var userPartTask = false;
      if(user != null) {
        for (var userTask of data.usuariosEnvolvidos) {
          if (userTask.toLowerCase().indexOf(user.toLowerCase()) >= 0) {
            userPartTask = true;
            break
          }
        }
      } else {
        userPartTask = true;
      }

      if(userPartTask) {
        tasks.push({task: task, data: data});

        qtdTarefas++;

        if(data.quantidadeRetornos > 0) {
          qtdTarefasRetrabalho++;
        }

        qtdRetornosTarefas += data.quantidadeRetornos;

        if(data.concluida) {
          qtdConcluidas++;
        }

        if(data.tipo === 'Bug') {
          qtdTarefasBugs++;
          tempoTarefasBugs+= data.tempoTotal
          tempoRetrabalhoTarefasBug+= data.tempoRetrabalho
          if(data.quantidadeRetornos > 0) {
          qtdTarefasBugsRetrabalho++;
        }
        } else {
          qtdTarefasMelhoria++;
          tempoTarefasMelhoria+= data.tempoTotal
          tempoRetrabalhoTarefasMelhoria = data.tempoRetrabalho;
          if(data.quantidadeRetornos > 0) {
            qtdTarefasMelhoriaRetrabalho++;
          }
        }

        tempoTarefas += data.tempoTotal
        tempoRetrabalho += data.tempoRetrabalho
        tempoPorStatusTODO += data.tempoPorStatus.TODO??0
        tempoPorStatusANDAMENTO += data.tempoPorStatus.ANDAMENTO??0
        tempoPorStatusREVIEW += data.tempoPorStatus.REVIEW??0
        tempoPorStatusDEPLOY_HOMOL += data.tempoPorStatus.DEPLOY_HOMOL??0
        tempoPorStatusAGUARDANDO_TESTE += data.tempoPorStatus.AGUARDANDO_TESTE??0
        tempoPorStatusTESTE += data.tempoPorStatus.TESTE??0
        tempoPorStatusDEPLOY_PROD += data.tempoPorStatus.DEPLOY_PROD??0

        tempoRetrabalhoPorStatusTODO += data.tempoRetrabalhoPorStatus.TODO??0
        tempoRetrabalhoPorStatusANDAMENTO += data.tempoRetrabalhoPorStatus.ANDAMENTO??0
        tempoRetrabalhoPorStatusREVIEW += data.tempoRetrabalhoPorStatus.REVIEW??0
        tempoRetrabalhoPorStatusDEPLOY_HOMOL += data.tempoRetrabalhoPorStatus.DEPLOY_HOMOL??0
        tempoRetrabalhoPorStatusAGUARDANDO_TESTE += data.tempoRetrabalhoPorStatus.AGUARDANDO_TESTE??0
        tempoRetrabalhoPorStatusTESTE += data.tempoRetrabalhoPorStatus.TESTE??0
        tempoRetrabalhoPorStatusDEPLOY_PROD += data.tempoRetrabalhoPorStatus.DEPLOY_PROD??0
      }
    }

    tempoPorStatus= {TODO:tempoPorStatusTODO,
      ANDAMENTO:tempoPorStatusANDAMENTO,
      REVIEW:tempoPorStatusREVIEW,
      DEPLOY_HOMOL:tempoPorStatusDEPLOY_HOMOL,
      AGUARDANDO_TESTE:tempoPorStatusAGUARDANDO_TESTE,
      TESTE:tempoPorStatusTESTE,
      DEPLOY_PROD:tempoPorStatusDEPLOY_PROD}

    tempoPorStatusString= {TODO:new JiraService().convertMsToTime(tempoPorStatus.TODO),
      ANDAMENTO:new JiraService().convertMsToTime(tempoPorStatus.ANDAMENTO),
      REVIEW:new JiraService().convertMsToTime(tempoPorStatus.REVIEW),
      DEPLOY_HOMOL:new JiraService().convertMsToTime(tempoPorStatus.DEPLOY_HOMOL),
      AGUARDANDO_TESTE:new JiraService().convertMsToTime(tempoPorStatus.AGUARDANDO_TESTE),
      TESTE:new JiraService().convertMsToTime(tempoPorStatus.TESTE),
      DEPLOY_PROD:new JiraService().convertMsToTime(tempoPorStatus.DEPLOY_PROD),}

      tempoRetrabalhoPorStatus= {TODO:tempoRetrabalhoPorStatusTODO,
        ANDAMENTO:tempoRetrabalhoPorStatusANDAMENTO,
        REVIEW:tempoRetrabalhoPorStatusREVIEW,
        DEPLOY_HOMOL:tempoRetrabalhoPorStatusDEPLOY_HOMOL,
        AGUARDANDO_TESTE:tempoRetrabalhoPorStatusAGUARDANDO_TESTE,
        TESTE:tempoRetrabalhoPorStatusTESTE,
        DEPLOY_PROD:tempoRetrabalhoPorStatusDEPLOY_PROD}

    tempoRetrabalhoPorStatusString= {TODO:new JiraService().convertMsToTime(tempoRetrabalhoPorStatus.TODO),
        ANDAMENTO:new JiraService().convertMsToTime(tempoRetrabalhoPorStatus.ANDAMENTO),
        REVIEW:new JiraService().convertMsToTime(tempoRetrabalhoPorStatus.REVIEW),
        DEPLOY_HOMOL:new JiraService().convertMsToTime(tempoRetrabalhoPorStatus.DEPLOY_HOMOL),
        AGUARDANDO_TESTE:new JiraService().convertMsToTime(tempoRetrabalhoPorStatus.AGUARDANDO_TESTE),
        TESTE:new JiraService().convertMsToTime(tempoRetrabalhoPorStatus.TESTE),
        DEPLOY_PROD:new JiraService().convertMsToTime(tempoRetrabalhoPorStatus.DEPLOY_PROD),}

    var indices = {
    percentualTempoBugs: (tempoTarefasBugs * 100) / tempoTarefas,
    percentualRetrabalhoDev: (tempoRetrabalhoPorStatus.ANDAMENTO * 100) / tempoPorStatus.ANDAMENTO,
    percentualTempoEsperaReviewTecnico: (tempoRetrabalhoPorStatus.REVIEW * 100) / tempoTarefas,
    percentualTempoEsperaDev: (tempoRetrabalhoPorStatus.TODO * 100) / tempoTarefas,
    percentualTempoEsperaQa: (tempoRetrabalhoPorStatus.AGUARDANDO_TESTE * 100) / tempoTarefas,
    percentualRetrabalhoQa: (tempoRetrabalhoPorStatus.TESTE * 100) / tempoPorStatus.TESTE,
  }

    return {
      usuario: user != null ? user : 'Todos',
      indices: indices,
      qtdTarefas: qtdTarefas,
      qtdConcluidas: qtdConcluidas,
      qtdTarefasRetrabalho: qtdTarefasRetrabalho,
      qtdTarefasBugs: qtdTarefasBugs,
      qtdTarefasMelhoria: qtdTarefasMelhoria,
      qtdTarefasBugsRetrabalho: qtdTarefasBugsRetrabalho,
      qtdTarefasMelhoriaRetrabalho: qtdTarefasMelhoriaRetrabalho,
      qtdRetornosTarefas: qtdRetornosTarefas,
      tempoTarefas: tempoTarefas,
      tempoRetrabalho: tempoRetrabalho,
      tempoTarefasBugs: tempoTarefasBugs,
      tempoTarefasMelhoria: tempoTarefasMelhoria,
      tempoRetrabalhoTarefasBug: tempoRetrabalhoTarefasBug,
      tempoRetrabalhoTarefasMelhoria: tempoRetrabalhoTarefasMelhoria,
      tempoTarefasString: new JiraService().convertMsToTime(tempoTarefas),
      tempoRetrabalhoString: new JiraService().convertMsToTime(tempoRetrabalho),
      tempoTarefasBugsString: new JiraService().convertMsToTime(tempoTarefasBugs),
      tempoTarefasMelhoriaString: new JiraService().convertMsToTime(tempoTarefasMelhoria),
      tempoRetrabalhoTarefasBugString: new JiraService().convertMsToTime(tempoRetrabalhoTarefasBug),
      tempoRetrabalhoTarefasMelhoriaString: new JiraService().convertMsToTime(tempoRetrabalhoTarefasMelhoria),
      tempoPorStatus: tempoPorStatus,
      tempoPorStatusString: tempoPorStatusString,
      tempoRetrabalhoPorStatus: tempoRetrabalhoPorStatus,
      tempoRetrabalhoPorStatusString: tempoRetrabalhoPorStatusString,
      tasks: tasks,};
  }

  convertMsToTime(milliseconds:number ) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let retorno:String

    if(hours < 24)
    retorno = `${this.padTo2Digits(parseInt(hours.toString()))} horas`;
    else
    retorno = `${parseInt((hours/24).toString())} dias`;

    return retorno.replace('NaN', '0');

    //return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:${this.padTo2Digits(
    //  seconds,
    //)}`;
  }

  padTo2Digits(num:number) {
    return num.toString().padStart(2, '0');
  }
}
