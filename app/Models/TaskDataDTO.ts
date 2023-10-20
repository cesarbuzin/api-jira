export default class TaskDataDTO {
  descricao: String
  concluida: boolean
  tipo: String
  tempoTotal: number
  quantidadeRetornos: number
  tempoRetrabalho: number
  tempoPorStatus: {TODO:number, ANDAMENTO:number,REVIEW:number, DEPLOY_HOMOL:number,AGUARDANDO_TESTE:number,TESTE:number,DEPLOY_PROD:number}
  tempoPorStatusString: {TODO:String, ANDAMENTO:String,REVIEW:String, DEPLOY_HOMOL:String,AGUARDANDO_TESTE:String,TESTE:String,DEPLOY_PROD:String}
  tempoRetrabalhoPorStatus: {TODO:number, ANDAMENTO:number,REVIEW:number, DEPLOY_HOMOL:number,AGUARDANDO_TESTE:number,TESTE:number,DEPLOY_PROD:number}
  tempoRetrabalhoPorStatusString: {TODO:String, ANDAMENTO:String,REVIEW:String, DEPLOY_HOMOL:String,AGUARDANDO_TESTE:String,TESTE:String,DEPLOY_PROD:String}
  historicoCompleto: { STATUS: String; TEMPO: number; TEMPO_STRING: String }[]
  usuariosEnvolvidos: String[]
  dataInicio: Date | null
  dataFim: Date | null
  tempoRetrabalhoString: String
  tempoTotalString: String
}
