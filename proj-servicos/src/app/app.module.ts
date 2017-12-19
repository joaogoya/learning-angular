import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServicoUmComponent } from './servico-um/servico-um.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ServicoUmService } from './servico-um/servico-um.service';
import { ServicoDoisComponent } from './servico-dois/servico-dois.component';
import { ClServicoService } from './servico-dois/cl-servico.service';



@NgModule({
  declarations: [
    AppComponent,
    ServicoUmComponent,
    ServicoDoisComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ServicoUmService, ClServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
