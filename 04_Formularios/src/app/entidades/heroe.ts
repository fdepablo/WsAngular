
// Clase que guarda los atributos de un Heroe
export class Heroe{

    private _id : number = 0;

    //Contador del ID del heroe. No se puede establecer el ID directamente, solo 
    //se puede acceder (get)
    private static contadorId : number = 1;

    //Al poner public en los parametros de entrada se crean automáticamente los atributos 
    //nombre y universo como publicos
    constructor(public nombre : string, public universo : string){
        this._id = Heroe.contadorId++;
        this.nombre = nombre
        this.universo = universo
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Nombre: ${this.nombre}, Universo: ${this.universo}`
    }

}