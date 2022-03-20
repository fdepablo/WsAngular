import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Persona } from '../entidades/persona';


//Los servicios en Angular se inyectan, jamás los crearemos con 'new'
//Aqúi estamos diciendo a Angular que cree un objeto de tipo personaService
//y que podrá ser inyectado en otros objetos (en nuestro caso, en componentes)
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //Hacemos que el atributo sea solo de lectura
  readonly endPoint = 'http://localhost:8080/'

  /**
   * Este constructor recibirá inyectado un objeto de tipo HttpClient, que será
   * en encargado de hacer las peticiones HTTP a nuestro servicio REST
   * @param httpClient 
   */
  constructor(private httpClient : HttpClient) { 
    
  }

  /**
   * Método que accede a una persona del servicio rest a partir de un id
   * @param id 
   * @returns 
   */
  public acceder(id : number) : Observable<Persona>{   
    //El método "pipe" en los Observable de Angular es usado para encadenar multiples
    //operadores juntos. En este caso solo lo usamos para capturar errores. En caso de que 
    //ocurran alguno, se lo pasaremos a la funcion manejarError
    return this.httpClient.get<Persona>(`${this.endPoint}personas/${id}`)
              .pipe(catchError(this.manejarError))
  }
  
  /**
   * Método que accede a todas las personas del servicio rest
   * @returns 
   */
  public listar(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.endPoint}personas/`)
            .pipe(catchError(this.manejarError))
  }  

  /**
   * Método que da de alta una persona en el servicio rest. La persona viajará
   * en el body en formato Json.
   * @param persona 
   * @returns 
   */
  public insertar(persona : Persona) : Observable<Persona>{    
    let headers = new HttpHeaders();
    //En este caso debemos de decir que el contenido que estamos mandando es de tipo
    //Json, ya que el servidor Rest solo trabaja con Json
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<Persona>(
                                          this.endPoint + "personas/",
                                          persona.toString(),
                                          {headers: headers}
                                        )
            .pipe(catchError(this.manejarError))  
  }
  
  /**
   * Método que da modifica una persona en el servicio rest. La persona viajará
   * en el body en formato Json y el id como path param
   * @param persona 
   * @returns 
   */
  public modificar(persona : Persona): Observable<any>{   
    let headers = new HttpHeaders();
    //En este caso debemos de decir que el contenido que estamos mandando es de tipo
    //Json, ya que el servidor Rest solo trabaja con Json
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.put(`${this.endPoint}personas/${persona.id}`,
                                persona.toString(),
                                {headers: headers})
             .pipe(catchError(this.manejarError))
  }

  /**
   * Método que elimina a una persona del servicio rest a partir de un id
   * @param id 
   * @returns 
   */
  public borrar(id : number) : Observable<any>{    
    return this.httpClient.delete(`${this.endPoint}personas/${id}`)
            .pipe(catchError(this.manejarError))
  } 

  /**
   * Metodo que maneja los posibles errores de las llamadas al servicio rest
   * @param error 
   * @returns 
   */
  private manejarError(error: HttpErrorResponse){
    let mensajeError = ''
    if (error.error instanceof ErrorEvent) {
      mensajeError = 'A ocurrido un error:' + error.error
    } else {
      mensajeError = `El servicio Rest retorno: Status: ${error.status}, ` +
            `Body: ${error.error}`
    }
    console.error(mensajeError)
    return throwError(() => new Error(mensajeError));
  }

  ngOnInit() {

  }
}