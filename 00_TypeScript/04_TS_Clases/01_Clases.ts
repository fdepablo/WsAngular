
//Si queremos usar la clase en otros ficheros de "ts" (muy habitual en Angular), 
//debemos de usar la palabra "export" antes de la palabra "class". 
///Ej: export class Persona {
class Persona {

    private _atributo;

    public get atributo() {
        return this._atributo;
    }
    public set atributo(value) {
        this._atributo = value;
    }
    //En visual studio code podemos generar los setter y getter subrayando la línea
    //del atributo y pulsando el enlace que aparece a la derecha del número de línea.
    //también podemos hacerlo subrayando la línea | botón derecho | refactorizar
    private _nombre: string;
    private _edad: number;
    
    //Los atributos estáticos son comunes a todos los objetos
    public static numeroPersonas : number = 0;

    //Solo podemos tener un constructor
    //Los parámetros de entrada que pongamos dentro del constructor con la visibilidad, se crearan
    //también como atributo
    constructor(){
        //A diferencia con otros lenguajes como Java, es obligatorio poner el this para
        //acceder a los atributos
        //Es importante inicializar los atributos en TS para evitar "NaN" o "undefined"
        this._nombre = "";
        this._edad = 0;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    //Podemos generar los métodos que queramos
    public saludar() : string{
        return `Hola me llamo ${this._nombre} y tengo ${this._edad} años`;
    }

    //Podemos hacer documentación como en otros lenguajes
    /**
     * método que compara la edad de esta persona con la edad de persona que le pasemos 
     * por parámetro
     * @param p la persona que queremos comparar
     * @returns this en caso de que esta persona sea mayor que la persona pasada por 
     * parámetro, p en caso de que la persona pasada por parámetro sea mayor, y null
     * en caso de que sean iguales 
     */
    public esMayor(p : Persona): Persona{
        if(this._edad > p._edad){
            return this
        }else if( p._edad > this._edad){
            return p
        }else{
            return null
        }
    }
}

//Creamos un objeto y su referencia
let persona1 : Persona = new Persona()
//también podemos crearla mediante inferencia de tipos
let persona2 = new Persona()
//Los tipos de las referencias siempre serán "object"
console.log("El tipo de la variable es: " + typeof(persona1))

//Podemos cambiar el estado de un objeto mediante su 'set'
//OJO! no se pone persona1.nombre("Steve Rogers")
persona1.nombre = "Steve Rogers"
persona1.edad = 45

persona2.nombre = "Tony Stark"
persona2.edad = 50

//o acceder a ellos mediante el 'get'
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona2.nombre)
console.log(persona2.edad)

//Los atributos estáticos se acceden a través de su clase, incluso dentro de la
//propia clase
Persona.numeroPersonas = 2;
console.log(Persona.numeroPersonas)

//Imprimimos la persona entera, por defecto lo saca con formato muy parecido a JSON
console.log(persona1)//Persona { _nombre: 'Steve Rogers', _edad: 45 }

//también podemos invocar a sus métodos públicos desde fuera
console.log(persona1.saludar())
let personaMayor = persona1.esMayor(persona2)
console.log(personaMayor.nombre)

//Operador "?", operador de acceso seguro
console.log("Operador '?'")
persona1 = null
//Si algo apunta a null e intentamos acceder a alguna de sus propiedades o métodos, 
//daría error en tiempo de ejecución y se pararía el programa
//console.log(persona1.edad)//ERROR

//Si queremos hacer un acceso seguro, podemos usar el operador '?'
//y así no nos parará el programa
console.log(persona1?.edad)//undefined

//también podemos crear atributos declarándolos en el constructor
class Pelicula {

    //En este caso, se nos creara implícitamente los atributos _titulo y _director
    //de manera privada.
    constructor(private _titulo : string, private _director : string){
        this._titulo = _titulo;
        this._director = _director;
    }

    public get titulo() : string {
        return this._titulo
    }

    public set titulo(titulo : string){
        this._titulo = titulo
    }

    public get director() : string{
        return this._director
    }
}

let pelicula : Pelicula = new Pelicula("La vida de Brian", "Terry Jones")
pelicula.titulo = "Los caballeros de la mesa cuadrada"
console.log(pelicula.titulo)

//Herencia
console.log("** HERENCIA **")
class Empleado extends Persona{
    private _salario: number;

    constructor(){
        //En el caso de herencia, debemos primero llamar al constructor padre mediante "super"
        super();
        this._salario = 0
    }

    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
    }

    //Podemos sobreescribir métodos
    //Para ello, el método hijo debe de tener la misma firma que el método padre
    public saludar(): string {
        //Notese que como la visibilidad del atributo nombre es "private", debemos de usar el 
        //método "get" para acceder a su valor. Idem con la edad. Podiamos haber declarado el 
        //nombre y la edad como "protected "y entonces podríamos acceder a el sin problema
        return `Hola me llamo ${this.nombre}, tengo ${this.edad} años y gano ${this._salario}`;
    }
}

let empleado1 : Empleado = new Empleado()
empleado1.nombre = "Peter"
empleado1.edad = 22
empleado1.salario = 25000

console.log(empleado1.saludar())
//El tipo de la variable empleado es también "object"
console.log("El tipo de la variable es: " + typeof(empleado1))
console.log(empleado1)

//Con una referencia padre podemos apuntar a cualquier objeto hijo
let persona3 : Persona = empleado1;
//Y se ejecutarán los métodos del objeto al que este apuntando mediante el polimorfismo
console.log("Polimorfismo: la referencia es de persona pero se ejecuta el metodo del objeto empleado")
console.log(persona3.saludar())
//No podemos apuntar con una referencia hija a un objeto padre
//empleado1 = persona1//error

//Interfaces
console.log("INTERFACES")
interface Movible{
    moverse();
    moverseMetros(metros : number)
}

//Las clases abstractas no pueden ser instanciadas
abstract class Vehiculo implements Movible{

    private _metros: number;

    constructor(){
        this._metros = 0;
    }

    //Cuando implementamos una interfaz debemos de implementar sus métodos
    public moverse() {
        console.log("Me muevo 10 metros")
        this._metros += 10;
    }
    
    public moverseMetros(metros: number) {
        console.log(`Me muevo ${metros} metros`)
        this._metros += metros;
    }

    public get metros(): number {
        return this._metros;
    }
    public set metros(value: number) {
        this._metros = value;
    }

    //Metodo abstracto
    public abstract tocarBocina();
}

class Coche extends Vehiculo{
    public tocarBocina() {
        console.log("Pi! Pi!");
    }
    //Heredamos todo lo de Vehiculo
}

class Barco extends Vehiculo{
    public moverse() {
        console.log("Estoy navegando 20 metros")
        this.metros += 20;
    }
    
    public moverseMetros(metros: number) {
        console.log(`Estoy navegando ${metros} metros`)
        this.metros += metros;
    }

    public tocarBocina() {
        console.log("Moc! Moc!");
    }
}

//La siguiente línea da error, no podemos crear un objeto de una clase abstracta
//let vehiculo1 : Vehiculo = new Vehiculo();
//Pero si podemos apuntar a cualquier objeto que herede de la clase Vehiculo
let vehiculo1 : Vehiculo = new Coche();
vehiculo1.moverse();
vehiculo1.tocarBocina();
console.log(vehiculo1)

//Podemos saber en tiempo de ejecución al tipo de objeto que estamos apuntando 
//con la palabra reservada "instanceof"
if(vehiculo1 instanceof Coche){
    console.log("Es un objeto de tipo coche")
}else{
    console.log("No es un coche :(")
}

//Gracias al polimorfismo, dependiendo de a que vehiculo apuntemos se ejecutara
//su método
vehiculo1 = new Barco();
vehiculo1.moverse();
vehiculo1.tocarBocina();
console.log(vehiculo1)

if(vehiculo1 instanceof Barco){
    console.log("Es un objeto de tipo barco")
}else{
    console.log("No es un barco :(")
}

//no podemos apuntar a una persona con una referencia de vehiculo
//vehiculo1 = new Persona();

//también podemos crear referencias mediante inferencia de tipos
let vehiculo2 = new Coche();
vehiculo2.moverse();

//Con esta referencia no podemos apuntar a una persona
//vehiculo2 = new Persona()

