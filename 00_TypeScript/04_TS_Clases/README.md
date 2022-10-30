# Clases y objetos en TypeScript

Las últimas versiones de JS, desde ECMAScript 6 o ES6, soporta la creación de clases. Con TS podemos usar esas características pero además añadirle el tipado a las variables y atributos.

Una clase es un molde para la creación de objetos, es decir, en una clase definimos que valores van a guardar los objetos (atributos) y cuál va a ser su comportamiento (métodos). El valor de los atributos puede cambiar, y al valor de sus atributos en un instante de tiempo se le llama "estado". El estado de un objeto puede cambiar en el tiempo. 

## Creación de clases y objetos

Para crear una clase en TS debemos de usar la palabra "class" seguida del nombre de la clase, y dentro de esta podemos definir sus atributos y métodos. Además, podemos definir un constructor, que es un método especial que se invocará cuando creemos el objeto. Dentro del constructor podemos poner el código que queramos para inicializar objetos. 

Podemos tener también atributos estáticos, mientras que los atributos normales pertenecen a cada objeto, los atributos estáticos son comunes a todos los objetos. Se declaran con la palabra reservada "static".

    class NombreClase {
        atributo1: string;
        atributo2: string;

        static atributoEstatico : string = "";

        constructor(atributo1: string, atributo2: string) {
            //this es una referencia al propio objeto
            this.atributo1 = atributo1;
            this.atributo2 = atributo2;
        }

        metodo1(valor: string){
            //TODO
        }
    }

Para crear objetos en TS debemos de usar la palabra "new" antes de la clase. Debemos de aguantar el objeto con una referencia al menos para no perderlo. Dicha referencia puede ser declarada del tipo del objeto (o de una clase superior), o podemos hacer que TS decida su tipo mediante inferencia de tipos.

    let variable : NombreClase = new NombreClase("a","b")
    //O mediante inferencia de tipos
    let variable  = new NombreClase("a","b")

## Visibilidades en los métodos y atributos
Al igual que en otros programas como Java, podemos establecer visibilidades a los atributos y a los métodos:

1. <b>private</b>. Podemos acceder solamente desde la clase
2. <b>protected</b>. Podemos acceder desde la clase y desde la clase que hereden de la misma
3. <b>public</b>. Podemos acceder desde cualquier parte de nuestro programa. Esta es la visibilidad por defecto en caso de no usar ninguna.

## Getters y Setters

En el tema de los atributos, es una buena práctica declararlos como privados y crear sus métodos modificadores y accesores (tambien llamados metodos "get" y "set") para trabajar con ellos.

A diferencia de otros lenguajes como Java, TS tiene palabras reservadas para crear su "set" y su "get", que son esas mismas. Así pues para crear el método set de un atributo simplemente lo llamaremos <b>set atributo{}</b> y los mismo para el método "get". Para diferencias entre método y el atributo privado, podemos hacer que el nombre de los atributos privados empiece con <b>_</b> (underscore o guión bajo.)

    class NombreClase {
        private _atributo1: string;
        private _atributo2: string;

        constructor(atributo1: string, atributo2: string) {
            //this es una referencia al propio objeto
            this._atributo1 = atributo1;
            this._atributo2 = atributo2;
        }

        //Metodo accesor o "get"
        public get atributo1(): string {
            return this._atributo1;
        }

        //Metodo modificador o "set"
        public set atributo1(value: string) {
            this._atributo1 = value;
        }
    }

## Herencia

La herencia es una herramienta muy poderosa que nos permite extender funcionalidades a otras clases. Cuando heredamos de una clase padre extendemos todos sus atributos y métodos para que puedan ser usados en la clase hija. En TS para heredar de una clase usaremos la palabra reservada <b>extends</b>

    class A extends B{
        //TODO
    }

Podemos sobrescribir los métodos que queramos de la clase padre, solo tenemos que llamar el método de la misma manera dentro de la clase hija y darle el comportamiento que queramos.

Con una referencia de una clase padre podemos apuntar a un objeto hijo, pero no a la inversa. Esto es muy útil para aplicar polimorfismo, una de las características más potentes de la programación orientada objetos. A la hora de ejecutar métodos, mediante el polimorfismo el método que ejecutamos siempre será el del objeto al que estamos apuntando, no el de la clase padre.

### Clases abstractas

Las clases abstractas son aquellas que no se pueden instanciar. Se usan principalmente para que sean heredadas por otras clases y para poder aplicar polimorfismo de una manera sencilla con todos sus objetos hijos. Las clases abstractas pueden tener (no es obligatorio) métodos abstractos, que son métodos que simplemente están declarados, NO implementados. La implementación de esos métodos correrá a cargo de las clases que hereden dicha interfaz. Una clase que tenga algún método abstracto deberá también de ser abstracta.

Una clase abstracta se crea poniendo la palabra reservada <b>abstract</b> y los métodos abstractos comienzan también por dicha palabra.

    abstract class A{
        //TODO

        public metodoNormal(){
            //TODO
        }
        
        public abstract metodoAbstracto();
    }

## Interfaces

Una interfaz es similar a una clase abstracta, pero los métodos que pongamos en ella son abstractos. Las clases que implementen la interfaz serán las encargadas de implementar esos métodos. Una interfaz define lo que se debe hacer, pero no como hacerlo.

Cuando una clase implementa una interfaz tiene la obligación de implementar los métodos que están declarados en dicha interfaz.

Para para crear una interfaz usaremos la palabra reservada <b>interface</b> y para hacer que una clase implemente la interfaz usaremos la palabra reservada <b>implements</b>

    interface I{
        metodo1();
    }

    class A implements I{
        metodo1(){
            //TODO
        }
    }

## Consideraciones

Este proyecto usa ES6 (ya que las clases en JS nacieron en las últimas versiones), por lo que debemos compilar el código como tal (ver el README.md de la carpeta **00_TypeScript** para más información). Básicamente tenemos que crear el fichero "tsconfig.json" como el que tenemos al mismo nivel, y luego para compilar abrir una terminal y ejecutar el comando **tsc**. 

