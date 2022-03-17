import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  mostrarTexto1 : boolean = true
  texto1 : string = "Bienvenidos a la directiva NGIF"

  mostrarTexto2 : boolean = true
  texto2 : string = "Bienvenidos a la directiva NGIF con un ELSE"

  condicion: string  = "cadena1"

  constructor() { }

  ngOnInit() {
  }

  mostrarOcultarTexto1(){
    this.mostrarTexto1 = !this.mostrarTexto1
  }

  mostrarOcultarTexto2(){
    this.mostrarTexto2 = !this.mostrarTexto2
  }

  mostrarOcultarTexto3(){
    if(this.condicion == "cadena1"){
      this.condicion = "cadena2"
    }else{
      this.condicion = "cadena1"
    }
  }
}
