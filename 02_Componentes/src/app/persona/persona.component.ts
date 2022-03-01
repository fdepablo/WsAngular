import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  private _nombre: string;
  private _edad: number;
  private _peso: number;

  constructor() { 
    this._nombre = "Steve Rogers"
    this._edad = 40
    this._peso = 95
  }

  ngOnInit(): void {
  }

  public get peso(): number {
    return this._peso;
  }
  public set peso(value: number) {
    this._peso = value;
  }

  public get edad(): number {
    return this._edad;
  }
  public set edad(value: number) {
    this._edad = value;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public convertirPesoALibras() : number{
    let libras = this._peso * 2.2046
    return libras
  }
}
