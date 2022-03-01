import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  listaHeroes = [
    {id: 23, universo:'DC', nombre:'Superman'},
    {id: 4, universo:'DC', nombre:'Batman'},
    {id: 45, universo:'MARVEL', nombre:'Capitan America'},
    {id: 34, universo:'MARVEL', nombre:'Ironman'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
