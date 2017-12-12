import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ModuloUmModule } from './modulo-um/modulo-um/modulo-um.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModuloUmModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
