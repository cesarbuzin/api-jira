import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ErroDTO from 'App/Models/ErroDTO'
import ProjectDataDTO from 'App/Models/ProjectDataDTO'
import SprintDataDTO from 'App/Models/SprintDataDTO'
import TaskDataDTO from 'App/Models/TaskDataDTO'
import JiraService from 'App/Services/JiraService'

export default class TasksController {

  jiraService = new JiraService();

  public async projectTasks({ request }: HttpContextContract): Promise<{tasks: String[]}| ErroDTO> {

    try {
    const project = request.input('project')
    const dataInicial = request.input('dataInicial')
    const dataFinal = request.input('dataFinal')

    var tasksList: String[] = await this.jiraService.getProjectTasks(project, dataInicial, dataFinal);

    return {tasks: tasksList};
  } catch (error) {
    return{mensagemErro: error.mensagem}
  }
  }

  public async taskData({
    request,
  }: HttpContextContract): Promise<TaskDataDTO| ErroDTO> {

    try {
    const issue = request.input('issue')


    return await this.jiraService.getTaskData(issue, null, null);
  } catch (error) {
    return{mensagemErro: error.mensagem}
  }
  }

  public async projectDataTasks({ request }: HttpContextContract): Promise<ProjectDataDTO| ErroDTO> {

    try {
      const project = request.input('project')
      const dataInicial = request.input('dataInicial')
      const dataFinal = request.input('dataFinal')

      return this.jiraService.projectDataTasks(project, null, dataInicial, dataFinal)
    } catch (error) {
      return{mensagemErro: error.mensagem}
    }
  }

  public async sprintDataTasks({ request }: HttpContextContract): Promise<ProjectDataDTO| ErroDTO> {

    try {
      const project = request.input('project')
      const sprint = request.input('sprint')

      return this.jiraService.sprintDataTasks(project, null, sprint)
    } catch (error) {
      return{mensagemErro: error.mensagem}
    }
  }

  public async sprintActualTasks({ request }: HttpContextContract): Promise<SprintDataDTO| ErroDTO> {

    try {
      const sprints = request.input('sprints')

      return this.jiraService.sprintActualTasks(sprints)
    } catch (error) {
      return{mensagemErro: error.mensagem}
    }
  }

  public async projectDataTasksCSV({ request }: HttpContextContract): Promise<String | ErroDTO> {

    try {
      const project = request.input('project')
      const dataInicial = request.input('dataInicial')
      const dataFinal = request.input('dataFinal')

      var pdt = await this.jiraService.projectDataTasks(project, null, dataInicial, dataFinal)

      var tasks = pdt.tasks
      var lines = '';
      lines += ('task'+ ';' +
      'descricao' + ';' +
      'concluida' + ';' +
      'tipo' + ';' +
      'tempoTotal' + ';' +
      'quantidadeRetornos' + ';' +
      'tempoRetrabalho' + ';' +
      'tempoPorStatus TODO' + ';' +
      'tempoPorStatus ANDAMENTO' + ';' +
      'tempoPorStatus REVIEW' + ';' +
      'tempoPorStatus DEPLOY_HOMOL' + ';' +
      'tempoPorStatus AGUARDANDO_TESTE' + ';' +
      'tempoPorStatus TESTE' + ';' +
      'tempoPorStatus DEPLOY_PROD' + ';' +
      'tempoPorStatusString TODO' + ';' +
      'tempoPorStatusString ANDAMENTO' + ';' +
      'tempoPorStatusString REVIEW' + ';' +
      'tempoPorStatusString DEPLOY_HOMOL' + ';' +
      'tempoPorStatusString AGUARDANDO_TESTE' + ';' +
      'tempoPorStatusString TESTE' + ';' +
      'tempoPorStatusString DEPLOY_PROD' + ';' +
      'tempoRetrabalhoPorStatus TODO' + ';' +
      'tempoRetrabalhoPorStatus ANDAMENTO' + ';' +
      'tempoRetrabalhoPorStatus REVIEW' + ';' +
      'tempoRetrabalhoPorStatus DEPLOY_HOMOL' + ';' +
      'tempoRetrabalhoPorStatus AGUARDANDO_TESTE' + ';' +
      'tempoRetrabalhoPorStatus TESTE' + ';' +
      'tempoRetrabalhoPorStatus DEPLOY_PROD' + ';' +
      'tempoRetrabalhoPorStatusString TODO' + ';' +
      'tempoRetrabalhoPorStatusString ANDAMENTO' + ';' +
      'tempoRetrabalhoPorStatusString REVIEW' + ';' +
      'tempoRetrabalhoPorStatusString DEPLOY_HOMOL' + ';' +
      'tempoRetrabalhoPorStatusString AGUARDANDO_TESTE' + ';' +
      'tempoRetrabalhoPorStatusString TESTE' + ';' +
      'tempoRetrabalhoPorStatusString DEPLOY_PROD' + ';' +
      'usuariosEnvolvidos' + ';' +
      'dataInicio' + ';' +
      'dataFim' + ';' +
      'tempoRetrabalhoString' + ';' +
      'tempoTotalString' +'\n');

      for(var task of tasks) {

        var usuarios = ''
        for(var usuario of task.data.usuariosEnvolvidos) {
          usuarios += (usuarios.length==0?'':', ') + usuario
        }

        lines += (
          task.task + ';' +
          task.data.descricao + ';' +
          task.data.concluida.toString() + ';' +
          task.data.tipo.toString() + ';' +
          task.data.tempoTotal.toString() + ';' +
          task.data.quantidadeRetornos.toString() + ';' +
          task.data.tempoRetrabalho.toString() + ';' +
          task.data.tempoPorStatus.TODO?.toString() + ';' +
          task.data.tempoPorStatus.ANDAMENTO?.toString() + ';' +
          task.data.tempoPorStatus.REVIEW?.toString() + ';' +
          task.data.tempoPorStatus.DEPLOY_HOMOL?.toString() + ';' +
          task.data.tempoPorStatus.AGUARDANDO_TESTE?.toString() + ';' +
          task.data.tempoPorStatus.TESTE?.toString() + ';' +
          task.data.tempoPorStatus.DEPLOY_PROD?.toString() + ';' +
          task.data.tempoPorStatusString.TODO?.toString() + ';' +
          task.data.tempoPorStatusString.ANDAMENTO?.toString() + ';' +
          task.data.tempoPorStatusString.REVIEW?.toString() + ';' +
          task.data.tempoPorStatusString.DEPLOY_HOMOL?.toString() + ';' +
          task.data.tempoPorStatusString.AGUARDANDO_TESTE?.toString() + ';' +
          task.data.tempoPorStatusString.TESTE?.toString() + ';' +
          task.data.tempoPorStatusString.DEPLOY_PROD?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatus.TODO?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatus.ANDAMENTO?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatus.REVIEW?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatus.DEPLOY_HOMOL?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatus.AGUARDANDO_TESTE?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatus.TESTE?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatus.DEPLOY_PROD?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatusString.TODO?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatusString.ANDAMENTO?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatusString.REVIEW?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatusString.DEPLOY_HOMOL?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatusString.AGUARDANDO_TESTE?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatusString.TESTE?.toString() + ';' +
          task.data.tempoRetrabalhoPorStatusString.DEPLOY_PROD?.toString() + ';' +
          usuarios.toString() + ';' +
          task.data.dataInicio?.toString() + ';' +
          task.data.dataFim?.toString() + ';' +
          task.data.tempoRetrabalhoString.toString() + ';' +
          task.data.tempoTotalString.toString() +'\n');
      }

      while(lines.indexOf('undefined') >= 0) {
        lines = lines.replace('undefined','')
      }

      return lines;
    } catch (error) {
      return{mensagemErro: error.mensagem}
    }
  }

  public async userDataTasks({ request }: HttpContextContract): Promise<ProjectDataDTO| ErroDTO> {

    try {
    const project = request.input('project')
    const user = request.input('user')
    const dataInicial = request.input('dataInicial')
    const dataFinal = request.input('dataFinal')

    return await this.jiraService.projectDataTasks(project, user, dataInicial, dataFinal);
  } catch (error) {
    return{mensagemErro: error.mensagem}
  }
  }
}
