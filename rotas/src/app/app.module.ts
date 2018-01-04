/* libs do angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Materialize */
import { MaterializeModule } from "angular2-materialize";

/* rotas e modulos */
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './aluno/alunos.module';

/* componentes */
import { AppComponent } from './app.component';
import { TestesMaterializeComponent } from './testes-materialize/testes-materialize.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TestesMaterializeComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }