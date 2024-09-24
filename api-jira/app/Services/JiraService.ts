import Env from '@ioc:Adonis/Core/Env'
import TaskDTO from 'App/Models/TaskDTO'
import TaskDataDTO from 'App/Models/TaskDataDTO'
import TaskDetailsDTO from 'App/Models/TaskDetailsDTO'
import TaskTimelineDTO from 'App/Models/TaskTimelineDTO'
import JiraRepository from 'App/Repositories/JiraRepository'
import axios from 'axios'

export default class JiraService {
  username = Env.get('JIRA_USER')
  password =
  Env.get('JIRA_TOKEN')
  basicAuth = 'Basic ' + btoa(this.username + ':' + this.password)


  public async getProjectSprints(
    project: String | null,
  ): Promise<String[]> {

    const idProjeto = await this.getProjectId(project);
    const value = await new JiraRepository().buscarSprintsProjeto(idProjeto)

    return value[0]
  }

  public async getProjectUsers(project: String, sprint: string, task: string) {

    const idProjeto = await this.getProjectId(project);
    const value = await new JiraRepository().buscarResponsaveisProjeto(idProjeto, sprint, task)
    const lst =  value[0].map((resp: { ds_responsavel: string }) => resp.ds_responsavel);

    return lst
  }

  public async getHorasLancadasTask(task: string, dthInicio: Date|null, dthFim: Date|null) {

    return await new JiraRepository().buscarTempoPorTarefa(task, dthInicio, dthFim)
  }

  public async getHorasLancadasSprint(sprint: string, task:string, user:string, dthInicio: Date, dthFim: Date) {

    return await new JiraRepository().buscarTempoPorSprint(sprint, task, user, dthInicio, dthFim)
  }

  public async getProjectId(
    project: String | null,
  ): Promise<number> {
    const headers = { Accept: 'application/json', Authorization: this.basicAuth, crossdomain: true }

      const url = `https://simlabs.atlassian.net/rest/api/3/project/${project}`
      var response = await axios({ method: 'get', url: url, headers: headers })

      if (response.status != 200) {
        console.log(response)
        throw new Error('Projeto não encontrado')
      }

      return response.data.id
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
    const criacao = response.data.fields.created;
    let status = response.data.fields.status.name?.toString().toUpperCase();

    if('BACKLOG' === status.toUpperCase()) {
      status = 'TAREFAS PENDENTES';
    }

    return {descricao: descricao, tipo: tipo, criacao: criacao, statusAtual: status}

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
    var listUsuariosEnvolvidos: string[] = []
    var dataInicio: Date | null = new Date(taskDetail.criacao.toString())
    var dataFim: Date | null = null
    var tempoDeployProd = 0
    var qtdQA = 0

    taskDetail.statusAtual = 'TO DO'

    const taskTimeline:TaskTimelineDTO[] = []

    // To Do
    // In Progress
    // Done
    // AGUARDANDO TESTE
    // EM TESTE
    // Aguardando Deploy Homologação
    // Code Review
    // Aguardando Deploy Produção

    let lastStatus = 'TO DO'

    response.data.values.forEach((element: { id: String; items: []; created: String }) => {
      element.items.forEach((item: { fieldId: String; fromString: String; toString: String }) => {

        const noPeriodo = dataInicioFiltro == null || dataFimFiltro == null || (new Date(dataInicioFiltro).getTime() <= new Date(element.created.toString()).getTime() && new Date(dataFimFiltro).getTime() >= new Date(element.created.toString()).getTime());
        const antesDoPeriodo = dataInicioFiltro == null || (new Date(dataInicioFiltro).getTime() > new Date(element.created.toString()).getTime())
        
          if (item.toString != null && item.fieldId == 'assignee') {
           
            if (
              listUsuariosEnvolvidos.indexOf(item.toString.toString()) < 0 &&
              item.toString &&
              item.toString != 'SIMlabs'
            ) {
              listUsuariosEnvolvidos.push(item.toString.toString())
            }

            var timelinePoint = new TaskTimelineDTO()
            timelinePoint.status = `${item.toString.toString()}`
            timelinePoint.naSprint = noPeriodo
            timelinePoint.dataHora = new Date(element.created.toString())
            timelinePoint.intTipo = 2
            taskTimeline.push(timelinePoint)
            
          } else if (item.fieldId == 'status') {

            if('BACKLOG' === item.toString.toUpperCase()) {
              item.toString = 'To Do';
            }
            if('EM PROGRESSO' === item.toString.toUpperCase()) {
              item.toString = 'In Progress';
            }
            if('AGUARDANDO DEPLOY' === item.toString.toUpperCase()){
              item.toString = 'Aguardando Deploy Homologação';
            }
            if('CONCLUÍDO' === item.toString.toUpperCase()){
              item.toString = 'Done';
            }

            lastStatus = item.toString.toUpperCase()

            var timelinePoint = new TaskTimelineDTO()
            timelinePoint.status = item.toString.toUpperCase()
            timelinePoint.naSprint = noPeriodo
            timelinePoint.dataHora = new Date(element.created.toString())
            timelinePoint.intTipo = 1
            taskTimeline.push(timelinePoint)

            if(antesDoPeriodo) {
              taskDetail.statusAtual = item.toString.toUpperCase()

              if (item.toString.toUpperCase() == 'DONE') {
                dataFim = new Date(element.created.toString())
                done = true
              }
            }

            if (item.toString.toUpperCase() == 'IN PROGRESS') {
              if (firstProgress) {
                tempoTotal = new Date(element.created.toString()).getTime()
                firstProgress = false
              } else {
                if (tempoRetrabalho == 0) {
                  tempoRetrabalho = new Date(element.created.toString()).getTime()
                }
                if(noPeriodo) {
                qtdRetrabalho++
                }
              }
            } else if (item.toString.toUpperCase() == 'AGUARDANDO DEPLOY PRODUÇÃO' && tempoRetrabalho > 0) {
              tempoDeployProd = new Date(element.created.toString()).getTime()
            } else if (item.toString.toUpperCase() == 'DONE') {
              dataFim = new Date(element.created.toString())
              done = true
            } else if (item.toString.toUpperCase() == 'EM TESTE') {
              if(noPeriodo) {
              qtdQA++;
              }
            }

            if(noPeriodo) {

              taskDetail.statusAtual = item.toString.toUpperCase()

              var timeIn = 0
              timeIn = new Date(element.created.toString()).getTime() - lastTime
              lastTime = new Date(element.created.toString()).getTime()
              var tempoStatus = mapTempos.get(item.fromString.toUpperCase())
              if (!tempoStatus) {
                tempoStatus = 0
              }
              mapTempos.set(item.fromString.toUpperCase(), tempoStatus + timeIn)

              if(tempoRetrabalho > 0) {
                if (((item.fromString.toUpperCase() == 'EM TESTE' || item.fromString.toUpperCase() == 'AGUARDANDO TESTE') && qtdQA > 1) || (item.fromString.toUpperCase() != 'EM TESTE' && item.fromString.toUpperCase() != 'AGUARDANDO TESTE')) {
                  var tempoStatus = mapTemposRetrabalho.get(item.fromString.toUpperCase())
                  if (!tempoStatus) {
                    tempoStatus = 0
                  }
                  mapTemposRetrabalho.set(item.fromString.toUpperCase(), tempoStatus + timeIn)
                }
              }

              listHist.push({ STATUS: item.fromString, TEMPO: timeIn, TEMPO_STRING: this.convertMsToTime(timeIn) })
            }
          }
      })
    })

    

    if (!done) {
      tempoTotal = new Date().getTime() - tempoTotal
      if(tempoRetrabalho > 0) {
        tempoRetrabalho = new Date().getTime() - tempoRetrabalho;
      }

      // VERIFICAÇÃO DO TEMPO DO STATUS ATUAL CASO NÃO TENHA CONCLUÍDO
      {
        taskDetail.statusAtual = lastStatus

        var timeIn = 0
        timeIn = new Date().getTime() - lastTime
        lastTime = new Date().getTime()
        var tempoStatus = mapTempos.get(lastStatus)
        if (!tempoStatus) {
          tempoStatus = 0
        }
        mapTempos.set(lastStatus, tempoStatus + timeIn)

        if(tempoRetrabalho > 0) {
          if (((lastStatus == 'EM TESTE' || lastStatus == 'AGUARDANDO TESTE') && qtdQA > 1) || (lastStatus != 'EM TESTE' && lastStatus != 'AGUARDANDO TESTE')) {
            var tempoStatus = mapTemposRetrabalho.get(lastStatus)
            if (!tempoStatus) {
              tempoStatus = 0
            }
            mapTemposRetrabalho.set(lastStatus, tempoStatus + timeIn)
          }
        }
      }
    } else {
      tempoRetrabalho = tempoDeployProd - tempoRetrabalho;
      tempoTotal = dataFim!.getTime() - tempoTotal
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
      statusAtual: taskDetail.statusAtual,
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
      taskTimeline: taskTimeline
    }
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

  public async getSprintTasks(
    project: String | null,
    sprint: String | null,
    task: String | null
  ): Promise<String[]> {
    const headers = { Accept: 'application/json', Authorization: this.basicAuth }

    var projectJql: String = (project ? `project = "${project}" ` : '') + (task?` ${(project?' AND ':'')} issue="${task}" `:'') + (sprint?` ${(project || task) ?' AND ':''} sprint="${sprint}"`:``)
    var startAt = 0
    var lenght = null
    var tasksList: String[] = []
    while(lenght == null || lenght > 0) {
      
      const url = `https://simlabs.atlassian.net/rest/api/3/search?maxResults=100&startAt=${startAt}&jql=${projectJql}`

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
    }

    return tasksList
  }

  public async getSprintsTasks(
    sprints: String,
  ): Promise<String[]> {
    const headers = { Accept: 'application/json', Authorization: this.basicAuth }

    var projectJql: String = ''
    var startAt = 0
    var lenght = null
    var tasksList: String[] = []
    var sprintsList = sprints.replace('\'','').replace('\'','').split(',')
    var sprintStr = '';
    sprintsList.forEach(sprint => {
      sprintStr += ` ${sprintStr.length==0?'':'or'} sprint = '${sprint}'`
    });

    while(lenght == null || lenght > 0) {

      const url = `https://simlabs.atlassian.net/rest/api/3/search?maxResults=100&startAt=${startAt}&jql=${projectJql} ${sprintStr}`

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
    }

    return tasksList
  }

  async sprintDataTasks(project: String,user:String|null, sprint:String|null, task:String|null, dthInicio: Date|null, dthFim: Date|null) {

    var tasksList: String[] = await new JiraService().getSprintTasks(project, sprint, task);
    var tasks:TaskDTO[] = [];
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
    
    var qtdPorStatus= {TODO:0, ANDAMENTO:0,REVIEW:0, DEPLOY_HOMOL:0,AGUARDANDO_TESTE:0,TESTE:0,DEPLOY_PROD:0, DONE:0}

    var lstUsuarios: String[] = []
    
    for(const task of tasksList) {
      var data: TaskDataDTO = await new JiraService().getTaskData(task, dthInicio, dthFim)

      if(user && !data.usuariosEnvolvidos.includes(user.toString())) {
        continue;
      }

      if(data.statusAtual === 'TO DO')
        qtdPorStatus.TODO = qtdPorStatus.TODO+1
      if(data.statusAtual === 'IN PROGRESS')
        qtdPorStatus.ANDAMENTO = qtdPorStatus.ANDAMENTO+1
      if(data.statusAtual === 'CODE REVIEW')
        qtdPorStatus.REVIEW = qtdPorStatus.REVIEW+1
      if(data.statusAtual === 'AGUARDANDO DEPLOY HOMOLOGAÇÃO')
        qtdPorStatus.DEPLOY_HOMOL = qtdPorStatus.DEPLOY_HOMOL+1
      if(data.statusAtual === 'AGUARDANDO TESTE')
        qtdPorStatus.AGUARDANDO_TESTE = qtdPorStatus.AGUARDANDO_TESTE+1
      if(data.statusAtual === 'EM TESTE')
        qtdPorStatus.TESTE = qtdPorStatus.TESTE+1
      if(data.statusAtual === 'AGUARDANDO DEPLOY PRODUÇÃO'  || data.statusAtual === 'AGUARDANDO DEPLOY')
        qtdPorStatus.DEPLOY_PROD = qtdPorStatus.DEPLOY_PROD+1
      if(data.statusAtual === 'DONE')
        qtdPorStatus.DONE = qtdPorStatus.DONE+1

      var userPartTask = false;
      for (var userTask of data.usuariosEnvolvidos) {
        if(user !== null && user !== '') {
          if (userTask.toLowerCase().indexOf(user.toLowerCase()) >= 0) {
            if(!lstUsuarios.includes(userTask)) {
              lstUsuarios.push(userTask)
            }
            userPartTask = true;
            break
          }
        } else {
          if(!lstUsuarios.includes(userTask)) {
            lstUsuarios.push(userTask)
          }
        }
      }

      if(user === null || user === '') {
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
      usuarios: lstUsuarios,
      indices: indices,
      qtdPorStatus: qtdPorStatus,
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

  async sprintActualTasks(sprints:String) {
    var tasksList: String[] = await new JiraService().getSprintsTasks(sprints);

    var qtdTarefas = 0;
    var qtdPorStatus= {TODO:0, ANDAMENTO:0,REVIEW:0, DEPLOY_HOMOL:0,AGUARDANDO_TESTE:0,TESTE:0,DEPLOY_PROD:0, DONE:0}

    for(const task of tasksList) {

      qtdTarefas += 1;

      var data: TaskDetailsDTO = await new JiraService().getTask(task)

      if(data.statusAtual === 'TAREFAS PENDENTES')
        qtdPorStatus.TODO = qtdPorStatus.TODO+1
      if(data.statusAtual === 'EM ANDAMENTO' || data.statusAtual === 'EM PROGRESSO')
        qtdPorStatus.ANDAMENTO = qtdPorStatus.ANDAMENTO+1
      if(data.statusAtual === 'CODE REVIEW')
        qtdPorStatus.REVIEW = qtdPorStatus.REVIEW+1
      if(data.statusAtual === 'AGUARDANDO DEPLOY HOMOLOGAÇÃO')
        qtdPorStatus.DEPLOY_HOMOL = qtdPorStatus.DEPLOY_HOMOL+1
      if(data.statusAtual === 'AGUARDANDO TESTE')
        qtdPorStatus.AGUARDANDO_TESTE = qtdPorStatus.AGUARDANDO_TESTE+1
      if(data.statusAtual === 'EM TESTE')
        qtdPorStatus.TESTE = qtdPorStatus.TESTE+1
      if(data.statusAtual === 'AGUARDANDO DEPLOY PRODUÇÃO' || data.statusAtual === 'AGUARDANDO DEPLOY')
        qtdPorStatus.DEPLOY_PROD = qtdPorStatus.DEPLOY_PROD+1
      if(data.statusAtual === 'CONCLUÍDO')
        qtdPorStatus.DONE = qtdPorStatus.DONE+1
    }

    return {
      qtdPorStatus: qtdPorStatus,
      qtdTarefas: qtdTarefas};
  }
}
