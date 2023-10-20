import TaskDTO from "./TaskDTO";

export default class ProjectDataDTO {

  usuario: String
  indices: {}
  qtdTarefas: number
  qtdConcluidas: number
  qtdTarefasRetrabalho: number
  qtdTarefasBugs: number
  qtdTarefasMelhoria: number
  qtdTarefasBugsRetrabalho: number
  qtdTarefasMelhoriaRetrabalho: number
  qtdRetornosTarefas: number
  tempoTarefas: number
  tempoRetrabalho: number
  tempoTarefasBugs: number
  tempoTarefasMelhoria: number
  tempoRetrabalhoTarefasBug: number
  tempoRetrabalhoTarefasMelhoria: number
  tempoTarefasString: String
  tempoRetrabalhoString: String
  tempoTarefasBugsString: String
  tempoTarefasMelhoriaString: String
  tempoRetrabalhoTarefasBugString: String
  tempoRetrabalhoTarefasMelhoriaString: String
  tempoPorStatus: {TODO:number, ANDAMENTO:number,REVIEW:number, DEPLOY_HOMOL:number,AGUARDANDO_TESTE:number,TESTE:number,DEPLOY_PROD:number}
  tempoPorStatusString: {}
  tempoRetrabalhoPorStatus: {TODO:number, ANDAMENTO:number,REVIEW:number, DEPLOY_HOMOL:number,AGUARDANDO_TESTE:number,TESTE:number,DEPLOY_PROD:number}
  tempoRetrabalhoPorStatusString: {}
  tasks: TaskDTO[]
}
