import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro-componente/primeiro.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { terceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { QuartoComponente } from './quarto-componente/quarto-componente.copmponent';
import { QuintoComponente } from './quinto-componente/quinto.component';
import { SextoComponenteComponent } from './sexto-componente/sexto-componente.component';
import { SetimoComponenteComponent } from './setimo-componente/setimo-componente.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponenteComponent,
    terceiroComponenteComponent,
    QuartoComponente,
    QuintoComponente,
    SextoComponenteComponent,
    SetimoComponenteComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
