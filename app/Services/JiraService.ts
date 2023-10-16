import TaskDTO from 'App/Models/TaskDTO';
import TaskDataDTO from 'App/Models/TaskDataDTO'
import axios from 'axios'

export default class JiraService {

  username = ''
  password =
    ''
  basicAuth = 'Basic ' + btoa(this.username + ':' + this.password)

  public async getUserDataTasks(project: String, user: String, dataInicial: String, dataFinal: String): Promise<TaskDTO[]> {

    var issues: String[] = await this.getProjectTasks(project, dataInicial, dataFinal);

    var retorno: TaskDTO[] = [];

    for(var issue of issues) {

      var data: TaskDataDTO = await this.getTaskData(issue);

      for(var userTask of data.usuariosEnvolvidos) {
        if(userTask.toLowerCase().indexOf(user.toLowerCase()) >= 0) {
          retorno.push({task: issue, data: data})
          break;
        }
      }
    }

    return retorno
  }

  public async getProjectTasks(project: String | null, dataInicial: String, dataFinal: String): Promise<String[]> {

    const headers = { Accept: 'application/json', Authorization: this.basicAuth }

    var projectJql: String = project ? `project = "${project}" AND ` : ''

    const url = `https://simlabs.atlassian.net/rest/api/3/search?jql=${projectJql}statusCategoryChangedDate >= ${dataInicial} AND statusCategoryChangedDate <= ${dataFinal}`

    var response = await axios({ method: 'get', url: url, headers: headers })

    if(response.status != 200) {
      throw new Error('PRojeto não encontrado');
    }

    var tasksList: String[] = []

    response.data.issues.forEach((status: { key: String }) => {
      tasksList.push(status.key);
    });

    return tasksList;
  }

  public async getTaskDescription(issue: String): Promise<String> {

    const headers = { Accept: 'application/json', Authorization: this.basicAuth }

    const url = `https://simlabs.atlassian.net/rest/api/3/issue/${issue}`

    var response = await axios({ method: 'get', url: url, headers: headers })

    if(response.status != 200) {
      throw new Error('Task não encontrada');
    }

    return response.data.fields.summary;
  }

  public async getTaskData(task: String): Promise<TaskDataDTO> {

    const headers = { Accept: 'application/json', Authorization: this.basicAuth }

    const url = `https://simlabs.atlassian.net/rest/api/3/issue/${task}/changelog`
    var response = await axios({ method: 'get', url: url, headers: headers })

    if(response.status != 200) {
      throw new Error('Task não encontrada');
    }

    var lastTime = 0
    var firstProgress = true
    var qtdRetrabalho = 0
    var tempoRetrabalho = 0
    var tempoTotal = 0
    var done = false
    var mapTempos = new Map()
    var listHist: { STATUS: String; TEMPO: number }[] = []
    var listUsuariosEnvolvidos: String[] = []
    var dataInicio: Date | null = null
    var dataFim: Date | null = null

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
        if (item.fieldId == 'assignee') {
          if(listUsuariosEnvolvidos.indexOf(item.toString) < 0 && item.toString && item.toString != 'SIMlabs') {
            listUsuariosEnvolvidos.push(item.toString)
          }
        } else if (item.fieldId == 'status') {

          if(!dataInicio) {
            dataInicio = new Date(element.created.toString())
          }

          if (item.toString == 'In Progress') {
            if (firstProgress) {
              tempoTotal = new Date(element.created.toString()).getTime()
              firstProgress = false
            } else {
              if (tempoRetrabalho == 0) {
                tempoRetrabalho = new Date(element.created.toString()).getTime()
              }
              qtdRetrabalho++
            }
          } else if (item.toString == 'Aguardando Deploy Produção' && tempoRetrabalho > 0) {
            tempoRetrabalho = new Date(element.created.toString()).getTime() - tempoRetrabalho
          } else if (item.toString == 'Done') {
            tempoTotal = new Date(element.created.toString()).getTime() - tempoTotal
            dataFim = new Date(element.created.toString())
            done = true
          }

          var timeIn = new Date(element.created.toString()).getTime() - lastTime
          if (lastTime > 0) {
            lastTime = new Date(element.created.toString()).getTime()
          }
          var tempoStatus = mapTempos.get(item.fromString)
          if (!tempoStatus) {
            tempoStatus = 0
          }
          mapTempos.set(item.fromString, tempoStatus + timeIn)

          listHist.push({STATUS:item.fromString, TEMPO:timeIn})
        }
      })
    })

    if (!done) {
      tempoTotal = new Date().getTime() - tempoRetrabalho
    }

    var tempoPorStatus = {TODO: mapTempos.get('To Do'),
    ANDAMENTO: mapTempos.get('In Progress'),
    REVIEW: mapTempos.get('Code Review'),
    DEPLOY_HOMOL: mapTempos.get('Aguardando Deploy Homologação'),
    AGUARDANDO_TESTE: mapTempos.get('AGUARDANDO TESTE'),
    TESTE: mapTempos.get('EM TESTE'),
    DEPLOY_PROD: mapTempos.get('Aguardando Deploy Produção'),
    CONCLUIDAS: mapTempos.get('Done')};

    var descricao: String = await this.getTaskDescription(task);

    return {
      descricao: descricao,
      tempoTotal: tempoTotal,
      quantidadeRetornos: qtdRetrabalho,
      tempoRetrabalho: tempoRetrabalho,
      dataInicio: dataInicio,
      dataFim: dataFim,
      usuariosEnvolvidos: listUsuariosEnvolvidos,
      tempoPorStatus: tempoPorStatus,
      historicoCompleto: listHist,
    }
  }

}
