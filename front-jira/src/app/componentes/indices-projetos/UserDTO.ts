export class UserDTO {

    name: string|undefined
    time: number|undefined

    constructor(name:string, time:number){
        this.name = name;
        this.time = time;
    }
}