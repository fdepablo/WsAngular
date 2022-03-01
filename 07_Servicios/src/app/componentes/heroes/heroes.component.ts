import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/entidades/heroe';
import { HeroeService } from 'src/app/servicios/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  listaHeroes : Heroe[] = []

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

  //Mediante la inyección de dependencias, cuando angular cree este componente, 
  //le pasará algún objeto de tipo PersonaService que hayamos declarado en nuestra aplicación.
  //Como efectivamente hemos declarado la clase PersonaService anotada con @Inyectable, 
  //le pasará dicho objeto para que podamos usarlo.
  constructor(private _heroeService : HeroeService) { 
    this._heroeService = _heroeService
    //Cargamos la lista de heroes al inicializar el componente
    this.listaHeroes = _heroeService.listar()
  }

  /**
   * Método que inserta un heroe en el array de heroes en caso de que los campos del heroe
   * no estén vacios. El id se genera automáticamente y es autoincremental.
   * Los campos del heroe se vaciaran en caso de que el heroe se haya insertado
   */
  public insertar(){
      let heroe  = new Heroe()
      heroe.nombre = this.nombre
      heroe.universo = this.universo
      console.log(`Insertando Heroe: ${heroe.toString()}`)
      
      let insertado = this._heroeService.insertar(heroe)
      if(insertado == 0){
        this.vaciar()
        console.log("Heroe insertado!")
      }else if(insertado==1){
        console.log("Nombre incompleto")
        this.nombreObligatorioOculto = false
      }else if(insertado==2){
        console.log("Universo incompleto")
        this.universoObligatorioOculto = false
      }        
  }

  /**
   * Método que modifica un heroe elegido de la tabla donde se muestran los heroes.
   * Los campos del heroe no pueden estar vacios. Los campos del formuario se vaciaran
   * en caso de que se modifique el heroe
   */
  public modificar(){    
    let heroe  = new Heroe()
    heroe.id = this.id
    heroe.nombre = this.nombre
    heroe.universo = this.universo
    console.log(`Modificando Heroe: ${heroe.toString()}`)
    
    let modificado = this._heroeService.modificar(heroe)

    if(modificado == 0){
      this.vaciar()
      console.log("Heroe modificado!")
    }else if(modificado==1){
      console.log("Nombre incompleto")
      this.nombreObligatorioOculto = false
    }else if(modificado==2){
      console.log("Universo incompleto")
      this.universoObligatorioOculto = false
    }else{
      console.log("Heroe no localizado")
    }    
  }

  /**
   * Método que elimina un heroe de la lista de heroes por id.
   * Además, vacia los campos del formulario
   */
  public borrar(){    
    console.log("Borrando... " + this.id)
    
    let borrado = this._heroeService.borrar(this.id)

    if(borrado){
      this.vaciar()
    }else{
      console.log("Heroe no localizado")
    }
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
  public seleccionar(idHeroe : number) : void{
    console.log("Seleccionando... " + idHeroe)
    this.ocultarMensajesError()

    let heroe = this._heroeService.acceder(idHeroe)

    if(heroe != null){
      this.id = heroe.id
      this.nombre = heroe.nombre
      this.universo = heroe.universo
    }   

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

