import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestesMaterializeComponent } from './testes-materialize/testes-materialize.component';
import { MaterializeModule } from "angular2-materialize";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
//import { CursosComponent } from './cursos/cursos.component';
//import { routing } from './app.routing';

//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';



@NgModule({
  declarations: [
    AppComponent,
    TestesMaterializeComponent,
    HomeComponent,
    LoginComponent,
    //CursosComponent,
    //CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    //routing
    AppRoutingModule,
    CursosModule
  ],
  providers: [/*CursosService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
