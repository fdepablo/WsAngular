import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  nombre : string = ''
  universo : string = ''

  parametroQuery1: string = ''
  parametroQuery2: string = ''

  //INYECCIÓN DE DEPENDENCIAS EN ANGULAR
  //Cuando nosotros no creamos un objeto y le pedimos a un tercero (Angular) que nos lo cree
  //y nos de su referencia

  //En Angular, podemos solicitar en el constructor de un componente que nos inyecte objetos
  
  //En este caso, le solicitaremos un objeto de tipo ActivatedRoute, que es una clase 
  //cuyas instancias representan a la ruta presente en la barra de navegación

  constructor(route:ActivatedRoute) { 
    console.log("Creando Componente1")

    //Accedemos a los valores contenidos en la ruta por el nombre que declaramos
    //ruta.snapshot.params['dato'], siendo "dato" el identificador que hemos declarado
    //en el fichero de routing (:dato)    
    //En nuestro caso:
    this.nombre = route.snapshot.params["nombre"]
    this.universo = route.snapshot.params["universo"]

    //Para recuperar los parametros de query es parecido al caso anterior
    //pero usando "queryParams"
    this.parametroQuery1 = route.snapshot.queryParams["parametro1"]
    this.parametroQuery2 = route.snapshot.queryParams["parametro2"]
  }

  ngOnInit() {
  }

}
