import { schema } from '@ioc:Adonis/Core/Validator'

export default class TaskValidator {
  public schema = schema.create({
    task: schema.string(),
    dthInicio: schema.string(),
    dthFim: schema.string(),
  })
}
