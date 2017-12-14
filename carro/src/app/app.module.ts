import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CentralizaInfosComponent } from './centraliza-infos/centraliza-infos.component';
import { RodaComponent } from './roda/roda.component';


@NgModule({
  declarations: [
    AppComponent,
    CentralizaInfosComponent,
    RodaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
