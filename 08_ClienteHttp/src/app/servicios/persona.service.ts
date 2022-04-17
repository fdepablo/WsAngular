import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Persona } from '../entidades/persona';


//Los servicios en Angular se inyectan, jamás los crearemos con 'new'.
//Para ello usaremos el decorador @Inyectable sobre la clase.

//Aqúi estamos diciendo a Angular que cree un objeto de tipo HeroeService
//por nosotros (Inversión de Control) y que podrá ser inyectado en otros objetos 
//(Inyección de Dependencias)

//Con "providedIn: 'root'" hacemos que el servicio tenga un comportamiento de
//'Singleton", es decir, el objeto será único para toda la aplicación.
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //Hacemos que el atributo sea solo de lectura con 'readonly'
  readonly endPoint = 'http://localhost:8080'

  /**
   * Este constructor recibirá inyectado un objeto de tipo _HttpClient, que será
   * en encargado de hacer las peticiones HTTP a nuestro servicio REST
   * @param _httpClient 
   */
  constructor(private _httpClient : HttpClient) { 
    
  }


  /**
   * Método que accede a todas las personas del servicio Rest
   * @returns un objeto de tipo Observable<any> con la llámada formada al servicio
   * Rest.
   */
  public listar(): Observable<any> {
    //Para hacer peticiones HTTP debemos de usar un objeto de tipo HttpClient y crear
    //un objeto de tipo Observable. 
    //Para hacer la petición primero debemos de elegir el método HTTP que queremos usar,
    //en este caso, get. A este método debemos de pasarle como parámetro el recurso
    //con el que queremos trabajar (http://localhost:80808/personas)
    return this._httpClient.get(`${this.endPoint}/personas`)
             .pipe(catchError(this.manejarError))
    //El método "pipe" en los Observable de Angular es usado para encadenar multiples
    //operadores juntos. En este caso solo lo usamos para capturar errores. En caso de que 
    //ocurran alguno, se lo pasaremos a la funcion manejarError
  }  

  /**
   * Método que accede a una persona del servicio Rest a partir de un id
   * @param id que queremos buscar en el servicio Rest
   * @returns un objeto de tipo Observable<any> con la llámada formada al servicio
   * Rest.
   */
  public acceder(id : number) : Observable<any>{   
    return this._httpClient.get(`${this.endPoint}/personas/${id}`)
              .pipe(catchError(this.manejarError))
  }
  
  /**
   * Método que da de alta una persona en el servicio rest. La persona viajará
   * en el body en formato Json.
   * @param persona 
   * @returns un objeto de tipo Observable<Persona> con la llámada formada al servicio
   * Rest.
   */
  public insertar(persona : Persona) : Observable<any>{    
    let headers = new HttpHeaders();
    //En este caso debemos de decir que el contenido del body que estamos mandando es de tipo
    //Json, ya que el servidor Rest solo trabaja con Json
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    //Mandamos 3 parametros:
    //1- URL
    //2- CONTENIDO DEL BODY
    //3- HEADERS
    return this._httpClient.post(this.endPoint + "/personas",//URL
                                 persona.toString(),//CONTENIDO DEL BODY (JSON)
                                 {headers: headers}//CABECERAS HTTP
                                )
            .pipe(catchError(this.manejarError))  
  }
  
  /**
   * Método que da modifica una persona en el servicio rest. La persona viajará
   * en el body en formato Json y el id como path param
   * @param persona 
   * @returns un objeto de tipo Observable<any> con la llámada formada al servicio
   * Rest.
   */
  public modificar(persona : Persona): Observable<any>{   
    let headers = new HttpHeaders();
    //En este caso debemos de decir que el contenido que estamos mandando es de tipo
    //Json, ya que el servidor Rest solo trabaja con Json
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    //Mandamos 3 parámetros:
    //1- URL
    //2- CONTENIDO DEL BODY
    //3- HEADERS
    return this._httpClient.put(`${this.endPoint}/personas/${persona.id}`,//URL
                                persona.toString(),//CONTENIDO DEL BODY (JSON)
                                {headers: headers})//CABECERAS HTTP
             .pipe(catchError(this.manejarError))
  }

  /**
   * Método que elimina a una persona del servicio rest a partir de un id
   * @param id de la persona que queremos eliminar
   * @returns un objeto de tipo Observable<any> con la llámada formada al servicio
   * Rest.
   */
  public borrar(id : number) : Observable<any>{    
    return this._httpClient.delete(`${this.endPoint}/personas/${id}`)
            .pipe(catchError(this.manejarError))
  } 

  /**
   * Método que maneja los posibles errores de las llamadas al servicio rest
   * @param error 
   * @returns un objeto de tipo Observable que contendrá el error que ha ocurrido
   */
  private manejarError(e: HttpErrorResponse){
    let mensajeError = ''
    //Diferenciamos si el error es del servidor o más genérico
    if (e.error instanceof ErrorEvent) {
      mensajeError = 'A ocurrido un error:' + e.error
    } else {
      mensajeError = `El servicio Rest retorno: Status: ${e.status}, ` +
            `Body: ${e.error}`
    }
    //Imprimimos el mensaje de error y lo arrojamos médiante una función lambda
    //Esta manerá tenemos que hacerla así cuando trabajamos con Observables.
    console.error(mensajeError)
    return throwError(() => new Error(mensajeError));
  }

  ngOnInit() {

  }
}
