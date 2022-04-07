
/**
 *  Clase que almacena una persona
 */
export class Persona{

    id: number = 0
    nombre: string = ""
    apellidos: string = ""
    edad: number = 0
        
    constructor(){}

    /**
     * Método que convierte un objeto de tipo persona a formato JSON (ya que el 
     * servidor REST solo admite formato JSON)
     * @returns el objeto en formato JSON 
     * {"id":1,"nombre":"STEVE","apellidos":"ROGERS","edad":39}
     */
    public toString() : string {
        return JSON.stringify(this)
    }
}