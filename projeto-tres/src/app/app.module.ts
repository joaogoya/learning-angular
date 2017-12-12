import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponenteSolto01Component } from './componente-solto-01/componente-solto-01.component';
import { TesteUmModule } from './teste-um/teste-um.module';
import { TesteModuloDoisModule } from './teste-modulo-dois/teste-modulo-dois.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteSolto01Component
  ],
  imports: [
    BrowserModule,
    TesteUmModule, 
    TesteModuloDoisModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
