import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ErroDTO from 'App/Models/ErroDTO'
import TaskDTO from 'App/Models/TaskDTO'
import TaskDataDTO from 'App/Models/TaskDataDTO'
import JiraService from 'App/Services/JiraService'

export default class TasksController {
  public async projectTasks({ request }: HttpContextContract): Promise<{tasks: String[]}| ErroDTO> {

    try {
    const project = request.input('project')
    const dataInicial = request.input('dataInicial')
    const dataFinal = request.input('dataFinal')

    var tasksList: String[] = await new JiraService().getProjectTasks(project, dataInicial, dataFinal);

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


    return await new JiraService().getTaskData(issue);
  } catch (error) {
    return{mensagemErro: error.mensagem}
  }
  }

  public async projectDataTasks({ request }: HttpContextContract): Promise<{tasks: TaskDTO[]}| ErroDTO> {

    try {
    const project = request.input('project')
    const dataInicial = request.input('dataInicial')
    const dataFinal = request.input('dataFinal')

    var tasksList: String[] = await new JiraService().getProjectTasks(project, dataInicial, dataFinal);

    var tasks:TaskDTO[] = [];

    for(const task of tasksList) {
      var data: TaskDataDTO = await new JiraService().getTaskData(task)
      tasks.push({task: task, data: data});
    }

    return {tasks: tasks};
  } catch (error) {
    return{mensagemErro: error.mensagem}
  }
  }

  public async userDataTasks({ request }: HttpContextContract): Promise<{tasks: TaskDTO[], totalTarefas: Number, tarefasRetornadas: Number, mediaRetornos: Number, maxRetornos: Number}| ErroDTO> {

    try {
    const project = request.input('project')
    const user = request.input('user')
    const dataInicial = request.input('dataInicial')
    const dataFinal = request.input('dataFinal')

    var tasksList: TaskDTO[] = await new JiraService().getUserDataTasks(project, user, dataInicial, dataFinal);

    var totalTarefas = 0;
    var tarefasComRetrabalho = 0;
    var mediaRetornos = 0;
    var maxRetornos = 0;

    for(const task of tasksList) {
      totalTarefas++;
      if(task.data.quantidadeRetornos > 0) {
        tarefasComRetrabalho++;
        mediaRetornos+= task.data.quantidadeRetornos;
        if(task.data.quantidadeRetornos > maxRetornos)
        maxRetornos = task.data.quantidadeRetornos
      }
    }
    mediaRetornos = mediaRetornos / totalTarefas;

    return {totalTarefas: totalTarefas, tarefasRetornadas: tarefasComRetrabalho, mediaRetornos: mediaRetornos, maxRetornos: maxRetornos,tasks: tasksList};
  } catch (error) {
    return{mensagemErro: error.mensagem}
  }
  }
}
