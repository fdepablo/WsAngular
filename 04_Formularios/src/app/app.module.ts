import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeroesComponent
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
