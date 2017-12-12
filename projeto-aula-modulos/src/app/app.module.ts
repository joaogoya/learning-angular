import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ModuloUmModule } from './modulo-um/modulo-um/modulo-um.module';
import { ModuloDoisModule } from './modulo-dois/modulo-dois.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModuloUmModule,
    ModuloDoisModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
