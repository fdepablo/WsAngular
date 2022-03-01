import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  color : string = "azul"
  texto : string = "Esto es un texto excrito con la directiva ngswitch"
  contador : number = 0;

  constructor() { }

  ngOnInit() {
  }

  cambiarColor(){
    this.contador++
    
    if(this.contador == 1){
      this.color = "rojo"
    }else if(this.contador == 2){
      this.color = "verde"
    }else{
      this.color = "no definido"
    }
  }
}
