import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { Componente1Component } from './componentes/componente1/componente1.component';

/*
Este fichero es donde configuraremos las rutas de la aplicación.

const routes: Routes = [];
*/
const routes: Routes = [
  {
    path : '', //En este caso decimos el componente que mostraremos por defecto
    component : BienvenidaComponent
  },
  {
    path : 'componente1', //cuando definimos el 'path' no puede empezar por '/'
    component : Componente1Component
  },
  {path : 'bienvenida', component : BienvenidaComponent},
  //aqui estamos pasando parametros en el pahtparam, eje: componente1/spiderman/marvel
  {path : 'componente1/:nombre/:universo', component : Componente1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
