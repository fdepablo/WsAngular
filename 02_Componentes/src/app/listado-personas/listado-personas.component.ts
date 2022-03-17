import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  /* PROPIEDADES */
  nombre: string;
  edad: number;
  peso: number;//En kg

  /* PROPIEDADES PB*/
  botonHabilitado = true
  botonOculto = "display:none"//block para mostrar, none para ocultar
  
  /* PROPIEDADES TWB*/
  profesion = "ingeniero"

  constructor() { 
    this.nombre = "Steve Rogers"
    this.edad = 40
    this.peso = 95
  }

  ngOnInit() {
  }

  public convertirPesoALibras() : number{
    let libras = this.peso * 2.2046
    return libras
  }

  public cambiarEstadoHabilitado(){
    this.botonHabilitado = !this.botonHabilitado;
  }

  public cambiarEstadoOculto(){
    if(this.botonOculto == "display:block"){
      this.botonOculto = "display:none"
    }else{
      this.botonOculto = "display:block"
    }
  }
}
