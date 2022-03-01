
// Clase que guarda los atributos de una persona
export class Persona{

    id: number = 0
    nombre: string = ""
    apellidos: string = ""
    edad: number = 0
        
    constructor(){}

    //El objeto esperado en el servicio REST tiene que tener formato Json
    public toString() : string {
        return JSON.stringify(this)
    }
}