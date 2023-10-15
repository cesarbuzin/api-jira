export default class TaskDataDTO {
  descricao: String
  tempoTotal: number
  quantidadeRetornos: number
  tempoRetrabalho: number
  tempoPorStatus: {}
  historicoCompleto: { STATUS: String; TEMPO: number }[]
  usuariosEnvolvidos: String[]
  dataInicio: Date | null
  dataFim: Date | null
}
