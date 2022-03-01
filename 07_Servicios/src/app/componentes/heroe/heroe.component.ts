import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/entidades/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  //Con el decorador @Input decimos que el objeto va a ser inyectado desde una clase padre.

  //Además, en este caso, Angular detecta que no esta inicializado el objeto (aunque si que 
  //lo estará ya que lo pasamos desde el padre), por lo que daría un error en tiempo de 
  //compilación. 
  //Si queremos evitar este error, debemos de configurar el fichero "tsconfig.json" con 
  //la propiedad: "strictPropertyInitialization": false
  @Input() heroe : Heroe;

  constructor() { }

  ngOnInit() {
  }

}
