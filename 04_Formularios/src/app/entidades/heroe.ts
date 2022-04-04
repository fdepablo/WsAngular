
// Clase que guarda los atributos de un Heroe
export class Heroe{

    /** 
    * Los atributos privados se ponen con "_" por convenio
    * Atributo privado que lleva el identificador único del hereo. Solo se
    * permitiá acceder a él con el método get.
    */
    private _id : number = 0;

    /*
    * Atributo contador del ID del heroe. Es estático para que su ciclo de vida no dependa 
    * del tiempo de vida de los objetos.
    * La función de este atributo es llevar un contador del atributo "_id"
    * que se asingará en el constructory se autoincrementará automáticamente por cada 
    * objeto heroe que se cree.
    */
    private static contadorId : number = 1;

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos nombre y universo en la clase. Es decir, esta clase tendrá 3 atributos
    //dinamicos y 1 estatico en total.
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