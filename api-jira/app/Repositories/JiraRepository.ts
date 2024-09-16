import Database from '@ioc:Adonis/Lucid/Database'

export default class JiraRepository {
  async buscarSprintsProjeto(idProjeto: number) {
    const results = await Database.rawQuery(
      `select distinct(sjts.ds_sprint) as ds_sprint, sjts.dt_inicio_sprint as dt_inicial_sprint, sjts.dt_final_sprint as dt_final_sprint from SIM_JIRA_TAREFAS_SPRINT sjts join SIM_JIRA_TAREFAS sjt on sjt.cd_tarefa = sjts.cd_tarefa where sjt.CD_PROJETO  = ? and sjts.ds_status_sprint != 'future' ORDER BY sjts.dt_final_sprint desc`,
      [idProjeto]
    )

    return results
  }

  async buscarResponsaveisProjeto(idProjeto: number, sprint: string, task: string) {
    const results = await Database.rawQuery(
      `select distinct(sjtw.DS_NOME_AUTOR) AS ds_responsavel from SIM_JIRA_TAREFAS_SPRINT sjts
      join SIM_JIRA_TAREFAS sjt on sjt.cd_tarefa = sjts.cd_tarefa
       JOIN SIM_JIRA_TAREFAS_WORKLOGS sjtw ON sjtw.CD_TAREFA = sjt.CD_TAREFA
      where sjt.CD_PROJETO  = ?
      and sjts.ds_status_sprint != 'future'
      and (? = '' or sjts.DS_SPRINT = ?) 
      and (? = '' OR sjt.cd_chave = ?)`,
      [idProjeto, sprint, sprint, task, task]
    )

    return results
  }

  async buscarTempoPorTarefa(task: string, dthInicio: Date | null, dthFim: Date | null) {
    try {
      if (dthInicio && dthFim) {
        const results = await Database.rawQuery(
          `select sum(sjtw.TEMPO_GASTO_SEC) as tempoGastoSec from SIM_JIRA_TAREFAS sjt 
      JOIN SIM_JIRA_TAREFAS_WORKLOGS sjtw ON sjtw.CD_TAREFA = sjt.CD_TAREFA 
      WHERE sjt.cd_chave = ?
      and sjtw.dt_inicio >= ?
      and sjtw.dt_inicio <= ?`,
          [task, dthInicio, dthFim]
        )
        return results
      } else {
        
        const results = await Database.rawQuery(
          `select sum(sjtw.TEMPO_GASTO_SEC) as tempoGastoSec from SIM_JIRA_TAREFAS sjt 
      JOIN SIM_JIRA_TAREFAS_WORKLOGS sjtw ON sjtw.CD_TAREFA = sjt.CD_TAREFA 
      WHERE sjt.cd_chave = ?`,
          [task]
        )
        return results
      }
    } catch (error) {
      console.log(error)
    }
  }

  async buscarTempoPorSprint(sprint: string | null, task: string | null, user: string, dthInicio: Date | null, dthFim: Date | null) {

    try {
      if (dthInicio && dthFim) {
        const results = await Database.rawQuery(
          `select sum(sjtw.TEMPO_GASTO_SEC) as tempoGastoSec from SIM_JIRA_TAREFAS sjt 
          JOIN SIM_JIRA_TAREFAS_SPRINT sjts ON sjts.CD_TAREFA  = sjt.CD_TAREFA 
          JOIN SIM_JIRA_TAREFAS_WORKLOGS sjtw ON sjtw.CD_TAREFA = sjt.CD_TAREFA 
        WHERE (? = '' or sjts.DS_SPRINT = ?)
          AND sjtw.DS_NOME_AUTOR = ?
          AND (? = '' or sjt.CD_CHAVE = ?)
          and (sjtw.dt_inicio >= ?)
          and (sjtw.dt_inicio <= ?)`,
          [sprint ?? '', sprint ?? '', user, task ?? '', task ?? '', dthInicio, dthFim]
        )

        return results
      } else {

        const results = await Database.rawQuery(
          `select sum(sjtw.TEMPO_GASTO_SEC) as tempoGastoSec from SIM_JIRA_TAREFAS sjt 
          JOIN SIM_JIRA_TAREFAS_SPRINT sjts ON sjts.CD_TAREFA  = sjt.CD_TAREFA 
          JOIN SIM_JIRA_TAREFAS_WORKLOGS sjtw ON sjtw.CD_TAREFA = sjt.CD_TAREFA 
        WHERE (? = '' or sjts.DS_SPRINT = ?)
          AND sjtw.DS_NOME_AUTOR = ?
          AND (? = '' or sjt.CD_CHAVE = ?)`,
          [sprint ?? '', sprint ?? '', user, task ?? '', task ?? '']
        )
        return results
      }
    } catch (error) {
      console.log(error)
    }
  }
}
