import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/entidades/heroe';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  listaHeroes : Heroe[] = []
  heroe : Heroe | null = null

  //Habilitar o deshabilitar botones
  insertarDeshabilitado = false
  modificarBorrarDeshabilitado = true

  //Habilitar o deshabilitar mensajes de error 
  //El nombre y el universo no pueden estar vacios
  nombreObligatorioOculto = true
  universoObligatorioOculto = true

  //Datos que recogeremos del formulario
  id : number = 0
  nombre : string = ""
  universo : string = ""

  constructor() { 
    let heroe : Heroe = new Heroe("Capitan America", "MARVEL")
    this.listaHeroes.push(heroe);
    heroe = new Heroe("Superman", "DC")
    this.listaHeroes.push(heroe)
  }

  /**
   * Método que inserta un heroe en el array de heroes en caso de que los campos del heroe
   * no estén vacios. El id se genera automáticamente y es autoincremental.
   * Los campos del heroe se vaciaran en caso de que el heroe se haya insertado
   */
  public insertar(){
    if(!this.hayErroresEnFormulario()){
      this.heroe = new Heroe(this.nombre, this.universo)
      console.log(`Insertando Heroe: ${this.heroe.toString()}`)
      this.listaHeroes.push(this.heroe)
      this.vaciar()
      console.log("Heroe insertado!")
    }    
  }

  /**
   * Método que comprueba si los campos del formulario están vacios
   * @returns true en caso de que los campos nombre y universo esten vacios. false
   * en caso contrario
   */
  public hayErroresEnFormulario():boolean{
    let error : boolean = false
    if(this.nombre.trim().length==0){
      this.nombreObligatorioOculto = false
      error = true
    }
    if(this.universo.trim().length==0){
      this.universoObligatorioOculto = false
      error = true
    }
    return error
  }

  /**
   * Método que modifica un heroe elegido de la tabla donde se muestran los heroes.
   * Los campos del heroe no pueden estar vacios. Los campos del formuario se vaciaran
   * en caso de que se modifique el heroe
   */
  public modificar(){    
    if(!this.hayErroresEnFormulario()){
      for(let a=0; a<this.listaHeroes.length; a++){
        let heroeAux : Heroe = this.listaHeroes[a]
        if(heroeAux.id == this.id){
          this.listaHeroes[a].nombre = this.nombre
          this.listaHeroes[a].universo = this.universo
          break
        }
      }
      //Evitamos null pointer con '?', en este caso se mostraría undefined
      //Con '?' hacemos acceso seguro, si no lo pondemos daría error de compilación
      console.log("Modificando... " + this.heroe?.toString())
      this.vaciar()
    }
  }

  /**
   * Método que elimina un heroe de la lista de heroes por id.
   * Además, vacia los campos del formulario
   */
  public borrar(){    
    for(let a=0; a<this.listaHeroes.length; a++){
      if( this.listaHeroes[a].id == this.id){
        this.listaHeroes.splice(a,1)
        break;
      }
    }
    this.vaciar()
    console.log("Borrando... " + this.id)
  }

  /**
   * Método que vacia los campos del formulario, resetea los mensajes de error
   * y habilita el boton de insertar.
   */
  public vaciar(){
    console.log("Vaciando...")     
    this.id = 0
    this.nombre = ""
    this.universo = ""

    this.insertarDeshabilitado = false
    this.modificarBorrarDeshabilitado = true

    this.ocultarMensajesError()
  }
  
  /**
   * Método que cargan en el formulario el heroe elegido en la tabla de la lista de heroes.
   * Una vez elegido el heroe, podremos modificarlo o borrarlo, pero no insertarlo.
   * El boton de insertar se deshabilitará, pero se habilitarán los botones de modificar
   * y de borrar
   * @param heroe representa el heroe que queremos cargar en el formulario
   */
  public seleccionar(heroe : Heroe) : void{
    console.log("Seleccionando...")
    this.ocultarMensajesError()

    //let copia : Heroe = new Heroe(heroe.nombre, heroe.universo)
    this.id = heroe.id
    this.nombre = heroe.nombre
    this.universo = heroe.universo

    this.insertarDeshabilitado = true
    this.modificarBorrarDeshabilitado = false
  }

  /**
   * Metodo que oculta los mensajes de error de los formularios.
   */
  public ocultarMensajesError(){
    this.nombreObligatorioOculto = true
    this.universoObligatorioOculto = true
  } 

  ngOnInit() {

  }

}
