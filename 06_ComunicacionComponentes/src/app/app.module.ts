import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { CVariableComponent } from './componentes/cvariable/cvariable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent,
    CVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//Add para establecer two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
