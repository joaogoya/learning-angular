import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CentralizaInfosComponent } from './centraliza-infos/centraliza-infos.component';
import { RodaComponent } from './roda/roda.component';
import { MotorComponent } from './motor/motor.component';
import { PortaComponent } from './porta/porta.component';
import { SuspencaoComponent } from './suspencao/suspencao.component';
import { VolanteComponent } from './volante/volante.component';
import { FreioComponent } from './freio/freio.component';


@NgModule({
  declarations: [
    AppComponent,
    CentralizaInfosComponent,
    RodaComponent,
    MotorComponent,
    PortaComponent,
    SuspencaoComponent,
    VolanteComponent,
    FreioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
