import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ModuloUmModule } from './modulo-um/modulo-um/modulo-um.module';
import { ModuloDoisModule } from './modulo-dois/modulo-dois.module';
import { ModuloTresModule } from './modulo-tres/modulo-tres.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModuloUmModule,
    ModuloDoisModule, 
    ModuloTresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
