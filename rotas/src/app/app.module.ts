import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestesMaterializeComponent } from './testes-materialize/testes-materialize.component';
import { MaterializeModule } from "angular2-materialize";

@NgModule({
  declarations: [
    AppComponent,
    TestesMaterializeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
