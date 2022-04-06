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
    //this._heroeService = new HeroeService()//NO SE DEBE HACER
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
      console.log(`insertar -> Insertando Heroe: ${heroe.toString()}`)
      
      let validado = this.validarHeroe(heroe)
      
      if(validado == 0){
        this._heroeService.insertar(heroe)
        this.vaciar()
        console.log("insertar -> Heroe insertado!")
      }else if(validado == 1){
        console.log("insertar -> Nombre incompleto")
        this.nombreObligatorioOculto = false
      }else if(validado == 2){
        console.log("insertar -> Universo incompleto")
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
    console.log(`modificar -> Modificando Heroe: ${heroe.toString()}`)

    let validado = this.validarHeroe(heroe)

    if(validado == 0){
      let modificado = this._heroeService.modificar(heroe)
      if(modificado){
        this.vaciar()
        console.log("modificar -> Heroe modificado!")
      }else{
        console.log("modificar -> Heroe no modificado")
      }      
    }else if(validado == 1){
      console.log("modificar -> Nombre incompleto")
      this.nombreObligatorioOculto = false
    }else if(validado == 2){
      console.log("modificar -> Universo incompleto")
      this.universoObligatorioOculto = false
    } 
  }

  /**
   * Método que elimina un heroe de la lista de heroes por id.
   * Además, vacia los campos del formulario
   */
  public borrar(){    
    console.log("borrar -> Borrando heroe con id: " + this.id)
    
    let borrado = this._heroeService.borrar(this.id)

    if(borrado){
      this.vaciar()
    }else{
      console.log("borrar -> Heroe no localizado")
    }
  }

  /**
   * Método que vacia los campos del formulario, resetea los mensajes de error
   * y habilita el boton de insertar.
   */
  public vaciar(){
    console.log("vaciar -> Vaciando...")     
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
    console.log("seleccionar -> Seleccionando... " + idHeroe)
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

  /**
   * Metodo que valida si los atributos nombre y universo no están vacios. También oculta
   * los mensajes de error
   * @param heroe 
   * @returns 1 en caso de que el nombre esté vacio, 2 en caso de que el universo esté
   * vacio y 0 en caso de que nombre y universo tengan datos.
   */
  private validarHeroe(heroe : Heroe) : number{
    this.ocultarMensajesError();
    if(heroe.nombre.trim().length == 0){
      return 1
    }else if(heroe.universo.trim().length == 0){
      return 2
    }else{
      return 0
    }
  }

  ngOnInit() {

  }

}

