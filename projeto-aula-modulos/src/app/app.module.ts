import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModuloUmComponent } from './modulo-um/modulo-um/modulo-um.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModuloUmComponent, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
