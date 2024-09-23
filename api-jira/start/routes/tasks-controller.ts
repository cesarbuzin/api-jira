import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/taskData', 'TasksController.taskData')
  Route.get('/sprintDataTasks', 'TasksController.sprintDataTasks')
  Route.get('/sprintActualTasks', 'TasksController.sprintActualTasks')
  Route.get('/projectSprints', 'TasksController.projectSprints')
  Route.get('/projectUsers', 'TasksController.projectUsers')
  Route.get('/taskTime', 'TasksController.taskTime')
  Route.get('/sprintTime', 'TasksController.sprintTime')
})
  .prefix('/tasks')
