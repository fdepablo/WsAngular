import { Component } from '@angular/core';

/*
  Aqui podemos encontrar definido nuestro componente, con su nombre y la 
  plantilla que vamos a usar de HTML y los estilos CSS.

  El componente se define con el decorador @Component (tambien llamados anotaciones
  en Java).

  Dentro del componente se definen los siguientes atributos
  1- selector, el nombre del componente. Siempre que pongamos este nombre accederemos a
  este componente
  2- templateUrl, el html asociado al componente
  3- styleUrls, el css asociado el componente (podemos poner varias hojas de estilo)
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
El decorador se pone encima de la definición de la clase. La palabra reservada
export es para poder utililzar esta clase en otros ambitos del proyecto
*/
export class AppComponent {
  //Dentro de la clase podemos definir atributos, que podrán ser utilizados en la
  //página HTML asociada
  titulo = '01_Introduccion';

  //Podemos crear varios atributos para que sean usados en nuestra página
  //nótese como en TS podemos tipar las variables o atributos
  nombre : string = "Harry Potter"
  edad : number = 18

  //En una clase podemos tener atributos y métodos
  public funcion1() {
    //Para acceder a un atributo usaremos la palabra this (obligatorio)
    this.nombre = "Tony Stark"
    //this.nombre = 34 //no podemos apuntar con un string a un numero

    //TS es un lenguaje tipado, todas las variables tendran un tipo
    //Podemos declarar el tipo de una variable en el momento (nombre : string) o 
    //podemos declararla mediante la inferencia de tipos

    //La inferencia de tipos es un concepto el cual el tipo de la variable no se declara
    //en tiempo de compilación, se decide en tiempo de ejecución. El tipo de la
    //variable seguira siendo el mismo durante todo su ciclo de vida, no lo podemos cambiar
    //como en JS

    let apellido = "Montana"
    apellido = "Potter"
    //apellido = 45
    //titulo = 45
  }
}
