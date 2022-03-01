import { Injectable } from '@angular/core';
import { Heroe } from '../entidades/heroe';


//Los servicios en Angular se inyectan, jamás los crearemos con 'new'
//Aqúi estamos diciendo a Angular que cree un objeto de tipo HeroeService
//y que podrá ser inyectado en otros objetos (en nuestro caso, en componentes)
@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private static contadorId : number = 1;
  private listaHeroes : Heroe[] = []

  constructor() { 
    let heroe : Heroe = new Heroe()
    heroe.id = HeroeService.contadorId++
    heroe.nombre = "Natasha Romanoff"
    heroe.universo = "MARVEL"
    this.listaHeroes.push(heroe);

    heroe = new Heroe()
    heroe.id = HeroeService.contadorId++
    heroe.nombre = "Batman"
    heroe.universo = "DC"
    this.listaHeroes.push(heroe)
  }

  /**
   * 
   * @param heroe 
   * @returns 
   */
  public insertar(heroe : Heroe) : number{
    
    let validado = this.validarHeroe(heroe)

    if (validado != 0){
      return validado;
    }

    heroe.id = HeroeService.contadorId++
    this.listaHeroes.push(heroe)
    return 0;
        
  }
  
  /**
   * 
   * @param heroe 
   * @returns 
   */
  public modificar(heroe : Heroe): number{   
    let validado = this.validarHeroe(heroe)

    if (validado != 0){
      return validado;
    }
    
    for(let a=0; a<this.listaHeroes.length; a++){
      let heroeAux : Heroe = this.listaHeroes[a]
      if(heroeAux.id == heroe.id){
        this.listaHeroes[a] = heroe
        return 0;
      }
    }
    
    return 3
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  public borrar(id : number) : boolean{    
    for(let a=0; a<this.listaHeroes.length; a++){
      if( this.listaHeroes[a].id == id){
        this.listaHeroes.splice(a,1)
        return true;
      }
    }
    return false;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  public acceder(id : number) : Heroe | null{    
    for(let a=0; a<this.listaHeroes.length; a++){
      if( this.listaHeroes[a].id == id){
        return this.listaHeroes[a]
      }
    }
    return null
  }

  /**
   * 
   * @returns 
   */
  public listar(): Heroe[]{
    return this.listaHeroes
  }

  /**
   * 
   * @param heroe 
   * @returns 
   */
  private validarHeroe(heroe : Heroe) : number{
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
