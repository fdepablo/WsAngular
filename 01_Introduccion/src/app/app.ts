import { Component } from '@angular/core';

/*
  Aquí podemos encontrar definido nuestro componente, con su nombre y la
  plantilla que vamos a usar de HTML y los estilos CSS.

  El componente se define con el decorador @Component (también llamado anotación
  en otros lenguajes como Java).

  Dentro del componente se definen los siguientes atributos:
  1- selector, el nombre del componente. Siempre que pongamos este nombre accederemos a
  este componente.
  2- templateUrl, el HTML asociado al componente.
  3- styleUrl, el CSS asociado al componente. Si necesitáramos varias hojas de estilo
  usaríamos la propiedad styleUrls.

  Desde Angular 19 los componentes son standalone por defecto. Esto significa que
  no necesitan declararse dentro de un AppModule. Las dependencias que use la
  plantilla se añaden directamente a la propiedad imports del componente.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
/*
El decorador se pone encima de la definición de la clase. La palabra reservada
export es para poder utilizar esta clase en otros ámbitos del proyecto.
*/
export class App {
  //Dentro de la clase podemos definir atributos, que podrán ser utilizados en la
  //página HTML asociada.
  titulo = '01_Introduccion';

  //Podemos crear varios atributos para que sean usados en nuestra página.
  //Nótese cómo en TS podemos tipar las variables o atributos.
  nombre: string = 'Harry Potter';
  edad: number = 18;

  //En una clase podemos tener atributos y métodos.
  public funcion1(): void {
    //Para acceder a un atributo usaremos la palabra this (obligatorio).
    this.nombre = 'Tony Stark';
    //this.nombre = 34; //No podemos asignar un número a un string.

    //TS es un lenguaje tipado. Podemos declarar el tipo de una variable
    //(nombre: string) o dejar que el compilador lo deduzca mediante inferencia.

    //La inferencia de tipos ocurre durante la compilación: TypeScript deduce el
    //tipo a partir del valor inicial y después comprueba que no lo cambiemos por
    //otro incompatible.
    let apellido = 'Montana';
    apellido = 'Potter';
    //apellido = 45;
    //this.titulo = 45;
  }
}
