import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { CadastrarRefatoradoComponent } from './cadastrar-refatorado/cadastrar-refatorado.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlComponent } from './campo-control/campo-control.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ListarComponent,
    HomeComponent,
    CadastrarRefatoradoComponent,
    FormDebugComponent,
    CampoControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
