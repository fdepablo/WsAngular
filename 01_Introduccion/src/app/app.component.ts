import { Component } from '@angular/core';

/*
 Aqui podemos encontrar definido nuestro componente, con su nombre y las 
 plantillas que vamos a usar de HTML y CSS.

 El componente se define con el decorador @Component (tambien llamados anotaciones
  en Java).

  Dentro del componente se definen los siguientes atributos
  1- selector, el nombre del componente. Siempre que pongamos este nombre accederemos a
  este componente
  2- template, el html asociado al componente
  3- styleUrls, el css asociado el componente
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
  //Dentro de la clase podemos definir atributos, que podrán ser utilizas en la
  //página HTML asociada
  titulo = '01_Introduccion';

  //Podemos crear varios atributos para que sean usados en nuestra página
  //nótese como en TS podemos tipar las variables o atributos
  nombre : string = "Harry Potter"
  edad : number = 18

}
