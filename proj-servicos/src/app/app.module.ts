/*bibliotecas do angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/*bootsrap*/
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

/* Componentes q estão aqui na appModule - declarations */
import { ServicoUmComponent } from './servico-um/servico-um.component';
import { ServicoDoisComponent } from './servico-dois/servico-dois.component';

/*Classes de serviço - providers */
import { ServicoUmService } from './servico-um/servico-um.service';
import { ClServicoService } from './servico-dois/cl-servico.service';
import { ModelService } from './servico-tres/model.service';

/*Componentes q tem seus proprios modulos - imports - essas 3 + bootstrap */
import{ servicoTres } from './servico-tres/servico-tres.module';
import { servicoQuatro } from './servico-quatro/servico-quatro.module';
import { ServicoCincoModule } from './servico-cinco/servico-cinco.module';
import { ServicoSeisModule } from './servico-seis/servico-seis.module';
import { ServicoSeteModule } from'./servico-sete/servico-sete.module';


@NgModule({
  declarations: [
    AppComponent,
    ServicoUmComponent,
    ServicoDoisComponent,
  ],
  imports: [

    /*bootsrap*/
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    /*modulos dos componentes*/
    servicoQuatro,
    servicoTres,
    ServicoCincoModule,
    ServicoSeisModule,
    ServicoSeteModule,
  ],
  providers: [
    ServicoUmService, 
    ClServicoService 
    /*ModelService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
