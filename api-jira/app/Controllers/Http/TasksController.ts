import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ErroDTO from 'App/Models/ErroDTO'
import ProjectDataDTO from 'App/Models/ProjectDataDTO'
import SprintDataDTO from 'App/Models/SprintDataDTO'
import TaskDataDTO from 'App/Models/TaskDataDTO'
import JiraService from 'App/Services/JiraService'

export default class TasksController {

  jiraService = new JiraService();

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
    const dthInicio = request.input('dthInicio')
    const dthFim = request.input('dthFim')


    return await this.jiraService.getTaskData(issue, dthInicio, dthFim);
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
      const dthInicio = request.input('dthInicio')
      const dthFim = request.input('dthFim')

      return this.jiraService.sprintDataTasks(project, user, sprint, task, dthInicio, dthFim)
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
}
