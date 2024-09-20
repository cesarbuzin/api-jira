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

  public async projectSprints({ request }: HttpContextContract): Promise<{sprints: String[]}| ErroDTO> {

    try {
    const project = request.input('project')

    var sprintList: String[] = await this.jiraService.getProjectSprints(project);

    return {sprints: sprintList};
  } catch (error) {
    return{mensagemErro: error.mensagem}
  }
  }

  public async projectUsers({ request }: HttpContextContract): Promise<{users: String[]}| ErroDTO> {

    try {
    const project = request.input('project')
    const sprint = request.input('sprint')
    const task = request.input('task')

    var usersList: String[] = await this.jiraService.getProjectUsers(project, sprint ?? '', task ?? '');

    return {users: usersList};
  } catch (error) {
    return{mensagemErro: error.mensagem}
  }
  }

  public async taskTime({ request }: HttpContextContract): Promise<{seconds: number}| ErroDTO> {

    try {
      const dthInicio = request.input('dthInicio')
      const dthFim = request.input('dthFim')
      const task = request.input('task')

      const ret = await this.jiraService.getHorasLancadasTask(task, dthInicio, dthFim);
      return {seconds: ret[0][0]};
    } catch (error) {
      return{mensagemErro: error.mensagem}
    }
  }

  public async sprintTime({ request }: HttpContextContract): Promise<{seconds: number}| ErroDTO> {

    try {
      const sprint = request.input('sprint')
      const user = request.input('user')
      const dthInicio = request.input('dthInicio')
      const dthFim = request.input('dthFim')
      const task = request.input('task')

      const ret = await this.jiraService.getHorasLancadasSprint(sprint, task, user,dthInicio, dthFim)

      return {seconds: ret[0][0]};
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
      const user = request.input('user')
      const task = request.input('task')

      return this.jiraService.sprintDataTasks(project, user, sprint, task)
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
