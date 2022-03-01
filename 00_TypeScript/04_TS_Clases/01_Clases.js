class Persona {
    constructor() {
        //A diferencia con otros lenguajes como Java, es obligatorio poner el this para
        //acceder a los atributos
        //Es importante inicializar los atributos en TS para evitar "NaN" o "undefined"
        this._nombre = "";
        this._edad = 0;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    //Podemos generar los metodos que queramos
    saludar() {
        return `Hola me llamo ${this._nombre} y tengo ${this._edad} años`;
    }
    esMayor(p) {
        if (this._edad > p._edad) {
            return this;
        }
        else if (p._edad > this._edad) {
            return p;
        }
        else {
            return null;
        }
    }
}
//Los atributos estaticos son comunes a todos los objetos
Persona.numeroPersonas = 0;
//Creamos un objeto y su referencia
let persona1 = new Persona();
//Tambien podemos crearla mediante inferencia de tipos
let persona2 = new Persona();
//Los tipos de las referencias siempre serán "object"
console.log("El tipo de la variable es: " + typeof (persona1));
//Podemos cambiar el estado de un objeto mediante su set
persona1.nombre = "Steve Rogers";
persona1.edad = 45;
persona2.nombre = "Tony Stark";
persona2.edad = 50;
//o acceder a ellos
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona2.nombre);
console.log(persona2.edad);
//Los atributos estaticos se acceden a traves de su clase, incluso dentro de la
//propia clase
Persona.numeroPersonas = 2;
console.log(Persona.numeroPersonas);
//Imprimimos la persona entera, por defecto lo saca con formato muy parecido a JSON
console.log(persona1); //Persona { _nombre: 'Steve Rogers', _edad: 45 }
//Tambien podemos invocar a sus metodos publicos desde fuera
console.log(persona1.saludar());
let personaMayor = persona1.esMayor(persona2);
console.log(personaMayor.nombre);
//Operador "?"
console.log("Operador '?'");
persona1 = null;
//Si algo apunta a null e intentamos acceder a alguna de sus propiedades o métodos, 
//daria error en tiempo de ejecución y se pararía el programa
//console.log(persona1.edad)//ERROR
//Si queremos hacer un acceso seguro, podemos usar el operador '?'
console.log(persona1 === null || persona1 === void 0 ? void 0 : persona1.edad); //undefined
//Tambien podemos crear atributos declarandolos en el constructor
class Pelicula {
    //En este caso, se nos creara implicitamente los atributos _titulo y _director
    //de manera privada.
    constructor(_titulo, _director) {
        this._titulo = _titulo;
        this._director = _director;
        this._titulo = _titulo;
        this._director = _director;
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    get director() {
        return this._director;
    }
}
let pelicula = new Pelicula("La vida de Brian", "Terry Jones");
pelicula.titulo = "Los caballeros de la mesa cuadrada";
console.log(pelicula.titulo);
//Herencia
console.log("HERENCIA");
class Empleado extends Persona {
    constructor() {
        //En el caso de herencia, debemos primero llamar al constructor padre mediante "super"
        super();
        this._salario = 0;
    }
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    //Podemos sobreescribir métodos
    saludar() {
        //Notese que como la vivibilidad del atributo nombre es "private", debemos de usar el 
        //método "get" para acceder a su valor. Idem con la edad. Podiamos haber declarado el 
        //nombre y la edad como "protected "y entonces podriamos acceder a el sin problema
        return `Hola me llamo ${this.nombre}, tengo ${this.edad} años y gano ${this._salario}`;
    }
}
let empleado1 = new Empleado();
empleado1.nombre = "Peter";
empleado1.edad = 22;
empleado1.salario = 25000;
console.log(empleado1.saludar());
//El tipo de la variable empleado es también "object"
console.log("El tipo de la variable es: " + typeof (empleado1));
console.log(empleado1);
//Con una referencia padre podemos apuntar a cualquier objeto hijo
let persona3 = empleado1;
//Y se ejecutaran los metodos del objeto al que este apuntando mediante el polimorfismo
console.log("Polimorfismo: la referencia es de persona pero se ejecuta el metodo del objeto empleado");
console.log(persona3.saludar());
//No podemos apuntar con una referencia hija a un objeto padre
//empleado1 = persona1//error
//Pero TS hace un casting de manera automática
//Interfaces
console.log("INTERFACES");
//Las clases abstractas no pueden ser instanciadas
class Vehiculo {
    constructor() {
        this._metros = 0;
    }
    //Cuando implementamos una interfaz debemos de implementar sus métodos
    moverse() {
        console.log("Me muevo 10 metros");
        this._metros += 10;
    }
    moverseMetros(metros) {
        console.log(`Me muevo ${metros} metros`);
        this._metros += metros;
    }
    get metros() {
        return this._metros;
    }
    set metros(value) {
        this._metros = value;
    }
}
class Coche extends Vehiculo {
    tocarBocina() {
        console.log("Pi! Pi!");
    }
}
class Barco extends Vehiculo {
    moverse() {
        console.log("Estoy navegando 20 metros");
        this.metros += 20;
    }
    moverseMetros(metros) {
        console.log(`Estoy navegando ${metros} metros`);
        this.metros += metros;
    }
    tocarBocina() {
        console.log("Moc! Moc!");
    }
}
//La siguiente linea da error, no podemos crear un objeto de una clase abstracta
//let vehiculo1 : Vehiculo = new Vehiculo();
//Pero si podemos apuntar a cualquier objeto que herede de la clase Vehiculo
let vehiculo1 = new Coche();
vehiculo1.moverse();
vehiculo1.tocarBocina();
console.log(vehiculo1);
//Podemos saber en tiempo de ejecución al tipo de objeto que estamos apuntando 
//con la palabra reservada "instanceof"
if (vehiculo1 instanceof Coche) {
    console.log("Es un objeto de tipo coche");
}
else {
    console.log("No es un coche :(");
}
//Gracias al polimorfismo, dependiendo de a que vehiculo apuntemos se ejecutara
//su metodo
vehiculo1 = new Barco();
vehiculo1.moverse();
vehiculo1.tocarBocina();
console.log(vehiculo1);
if (vehiculo1 instanceof Barco) {
    console.log("Es un objeto de tipo barco");
}
else {
    console.log("No es un barco :(");
}
//no podemos apuntar a una persona con una referencia de vehiculo
//vehiculo1 = new Persona();
//Tambien podemos crear referencias mediante inferencia de tipos
let vehiculo2 = new Coche();
vehiculo2.moverse();
