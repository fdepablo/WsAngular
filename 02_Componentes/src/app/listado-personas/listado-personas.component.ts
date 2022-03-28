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
  botonDeshabilitado = false
  botonOculto = "display:block"//block para mostrar, none para ocultar
  
  /* PROPIEDADES TWB*/
  profesion = "arquitecto"

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

  //Event Binding
  public cambiarEstadoHabilitado() : void{
    this.botonDeshabilitado = !this.botonDeshabilitado;
  }

  public cambiarEstadoOculto(){
    if(this.botonOculto == "display:block"){
      this.botonOculto = "display:none"//ocultar
    }else{
      this.botonOculto = "display:block"//mostrar
    }
  }
}
