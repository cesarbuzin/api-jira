import { UserDTO } from "./UserDTO"

export class TaskDTO {

    id:string|undefined
    descricao:string|undefined
    status:string|undefined
    tempoEmStatusGasto:number|undefined
    tempoEmRetrabalhoStatus:number|undefined
    tempoLancadoSprint:number|undefined
    tempoLancadoTotal:number|undefined
    quantidadeRetornos:number|undefined
    usuariosEnvolvidos:UserDTO[] = []
    perRetrabalhoDev:number|undefined
    perRetrabalhoQa:number|undefined
    tempoAndamento:number|undefined
    tempoAndamentoRetrabalho:number|undefined
    tempoTeste:number|undefined
    tempoTesteRetrabalho:number|undefined
}