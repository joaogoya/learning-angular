import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ServCadService } from './cadastro/serv-cad.service';
import { ComponeteReusoComponent } from './componete-reuso/componete-reuso.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ComponeteReusoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServCadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
