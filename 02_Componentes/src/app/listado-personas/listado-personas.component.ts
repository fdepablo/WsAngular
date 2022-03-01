import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  botonHabilitado = false
  botonOculto = "display:block"//block para mostrar, none para ocultar
  profesion = "ingeniero"

  constructor() { }

  ngOnInit() {
  }

  cambiarEstadoHabilitado(){
    this.botonHabilitado = !this.botonHabilitado;
  }

  cambiarEstadoOculto(){
    if(this.botonOculto == "display:block"){
      this.botonOculto = "display:none"
    }else{
      this.botonOculto = "display:block"
    }
  }
}
