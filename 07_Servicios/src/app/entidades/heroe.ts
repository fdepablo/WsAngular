
// Clase que guarda los atributos de un Heroe
export class Heroe{

    //Para generar los getter y setters de los atributos, primero hemos creado el 
    //atributo sin el guien bajo "_", lo hemos seleccionado y luego en la bombilla
    //que ha aparecido hemos seleccionado "generar getter y setter"
    private _id: number = 0
    private _nombre: string = ""
    private _universo: string = ""
    
    constructor(){}

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get nombre(): string {
        return this._nombre
    }
    public set nombre(value: string) {
        this._nombre = value
    }

    public get universo(): string {
        return this._universo
    }
    public set universo(value: string) {
        this._universo = value
    }

    public toString() : string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Universo: ${this.universo}`
    }

}