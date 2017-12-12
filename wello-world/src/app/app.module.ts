import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro-componente/primeiro.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { terceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { QuartoComponente } from './quarto-componente/quarto-componente.copmponent';
import { QuintoComponente } from './quinto-componente/quinto.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponenteComponent,
    terceiroComponenteComponent,
    QuartoComponente,
    QuintoComponente,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
