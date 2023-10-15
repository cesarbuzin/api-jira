import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/projectTasks', 'TasksController.projectTasks')
  Route.get('/taskData', 'TasksController.taskData')
  Route.get('/projectDataTasks', 'TasksController.projectDataTasks')
  Route.get('/userDataTasks', 'TasksController.userDataTasks')
})
  .prefix('/tasks')
