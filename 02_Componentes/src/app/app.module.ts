import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [					
    AppComponent,
      ListadoPersonasComponent,
      CabeceraComponent,
      PieDePaginaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//Este modulo debemos de importarlo para hacer Two Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
