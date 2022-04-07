import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  listaPersonas : Persona[] = []

  //Habilitar o deshabilitar botones
  insertarDeshabilitado = false
  modificarBorrarDeshabilitado = true

  //Habilitar o deshabilitar mensajes de error 
  //El nombre y el apellidos no pueden estar vacios
  nombreObligatorioOculto = true
  apellidosObligatorioOculto = true

  //Datos que recogeremos del formulario
  id : number = -1
  nombre : string = ""
  apellidos : string = ""
  edad : number = 0

  //Mediante la inyección de dependencias, cuando angular cree este componente, 
  //le pasará algún objeto de tipo PersonaService que hayamos declarado en nuestra aplicación.
  //Como efectivamente hemos declarado la clase PersonaService anotada con @Inyectable, 
  //le pasará dicho objeto para que podamos usarlo.
  constructor(private _personaService : PersonaService) { 
    this._personaService = _personaService
    //Cargamos la lista de Personas al inicializar el componente
    this.listar()
  }

  public listar(){
    let obs : Observable<Persona[]> = this._personaService.listar();
      
    //Cuando invocamos el método subscribe es cuando ejecutamos la petición 
    //HTTP al servidor. Dentro de método ponemos 2 funciones lambda, next
    //se ejecutará si todo ha ido bien, error se ejecutará si ha habido
    //algún problema
    obs.subscribe({
        next:  (respuesta: Persona[]) => {
          this.listaPersonas = respuesta;
        },
        error: (e: any) => {
          this.listaPersonas = []
          console.log(`listar -> No se han podido listar las personas, ${e}`)
          alert(e)
        }
      });
  }

  /**
   * Método que cargan en el formulario el Persona elegido en la tabla de la lista de Personas.
   * Una vez elegido el Persona, podremos modificarlo o borrarlo, pero no insertarlo.
   * El boton de insertar se deshabilitará, pero se habilitarán los botones de modificar
   * y de borrar
   * @param Persona representa el Persona que queremos cargar en el formulario
   */
   public seleccionar(idPersona : number) : void{
    console.log("seleccionar -> Seleccionando... " + idPersona)
    this.ocultarMensajesError()

    this._personaService.acceder(idPersona)
      .subscribe({
        next : (respuesta : Persona)   => {
          console.log('seleccionar -> objeto: ' + JSON.stringify(respuesta))
          this.id = respuesta.id
          this.nombre = respuesta.nombre
          this.apellidos = respuesta.apellidos
          this.edad = respuesta.edad

          this.insertarDeshabilitado = true
          this.modificarBorrarDeshabilitado = false          
        },
        error: (e: any) => {
          console.log(`seleccionar -> No se ha podido seleccionar la persona, ${e}`)
          alert(e)
        }
      });           
  }

  /**
   * Método que inserta un Persona en el array de Personas en caso de que los campos del Persona
   * no estén vacios. El id se genera automáticamente y es autoincremental.
   * Los campos del Persona se vaciaran en caso de que el Persona se haya insertado
   */
  public insertar(){
      let persona  = new Persona()
      persona.nombre = this.nombre
      persona.apellidos = this.apellidos
      persona.edad = this.edad

      let validada = this.validarPersona(persona);

      if(validada == 0){
        console.log(`insertar -> Insertando Persona: ${persona.toString()}`)
        this._personaService.insertar(persona)
          .subscribe({
            next : (respuesta : Persona) => {
              console.log(`insertar -> Persona insertada, ${respuesta}`) 
              this.listar()
              this.vaciar()
            },
            error: (e: any) => {
              console.log(`insertar -> No se ha podido insertar la persona, ${e}`)
              alert(e)
            }
          })   
      }else if(validada == 1){
        console.log("insertar -> Nombre incompleto")
        this.nombreObligatorioOculto = false
      }else if(validada == 2){
        console.log("insertar -> apellidos incompleto")
        this.apellidosObligatorioOculto = false
      }        
  }

  /**
   * Método que modifica un Persona elegido de la tabla donde se muestran los Personas.
   * Los campos del Persona no pueden estar vacios. Los campos del formuario se vaciaran
   * en caso de que se modifique el Persona
   */
  public modificar(){    
    let persona  = new Persona()
    persona.id = this.id
    persona.nombre = this.nombre
    persona.apellidos = this.apellidos
    persona.edad = this.edad

    let validada = this.validarPersona(persona);

    if(validada == 0){
      console.log(`modificar -> Modificando Persona: ${persona.toString()}`)
      this._personaService.modificar(persona)
        .subscribe({
          next : respuesta => {
            console.log(`modificar -> Persona modificada, ${respuesta}`) 
            this.listar()
            this.vaciar()
          },
          error: (e: any) => {
            console.log(`modificar -> No se ha podido modificar la persona, ${e}`)
            alert(e)
          }
        })
    }else if(validada == 1){
      console.log("modificar -> Nombre incompleto")
      this.nombreObligatorioOculto = false
    }else if(validada == 2){
      console.log("modificar -> apellidos incompleto")
      this.apellidosObligatorioOculto = false
    }       
  }

  /**
   * Método que elimina un Persona de la lista de Personas por id.
   * Además, vacia los campos del formulario
   */
  public borrar(){    
    console.log("borrar -> Borrando... " + this.id)
    
    this._personaService.borrar(this.id)
      .subscribe({
        next : respuesta => {
          console.log(`borrar -> Persona modificada, ${respuesta}`) 
          this.listar()
          this.vaciar()
        },
        error: (e: any) => {
          console.log(`borrar -> No se ha podido borrar la persona, ${e}`)
          alert(e)
        }
      })    
  }

  /**
   * Método que vacia los campos del formulario, resetea los mensajes de error
   * y habilita el boton de insertar.
   */
  public vaciar(){
    console.log("vaciar -> Vaciando...")     
    this.id = 0
    this.nombre = ""
    this.apellidos = ""
    this.edad = 0

    this.insertarDeshabilitado = false
    this.modificarBorrarDeshabilitado = true

    this.ocultarMensajesError()
  }  

  /**
   * Metodo que oculta los mensajes de error de los formularios.
   */
  public ocultarMensajesError(){
    this.nombreObligatorioOculto = true
    this.apellidosObligatorioOculto = true
  } 

  /**
   * Método que valida si el nombre y los apellidos de una persona están rellenos. Además
   * oculta los mensajes de error
   * @param persona 
   * @returns 
   */
   private validarPersona(persona : Persona) : number{
    this.ocultarMensajesError();
    if(persona.nombre.trim().length == 0){
      return 1
    }else if(persona.apellidos.trim().length == 0){
      return 2
    }else{
      return 0
    }
  }

  ngOnInit() {

  }


}
