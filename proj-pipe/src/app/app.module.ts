import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Pipe01Component } from './pipe-01/pipe-01.component';
import { CamelCasePipe } from './camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Pipe01Component,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
