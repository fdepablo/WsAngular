
/**
 *  Clase que almacena una persona
 */
export class Persona{

    id: number
    nombre: string
    apellidos: string
    edad: number
        
    constructor(){
        this.id = 0
        this.nombre = ''
        this.apellidos = ''
        this.edad = 0
    }

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