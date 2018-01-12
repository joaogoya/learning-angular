
/* libs do angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* Materialize */
import { MaterializeModule } from "angular2-materialize";

/* rotas, guardas, servicos e modulos */
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuardService } from './guard/auth.guard';
import { CursosGuard } from './guard/curso.guard';
import { AlunosGuard } from './guard/alunos.guard';
import { AlunonDeactivateGuard } from './guard/aluno-deactvate.guard';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './aluno/alunos.module';

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
    //CursosModule,
    //AlunosModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      AuthService, 
      AuthGuardService,
      CursosGuard,
      AlunosGuard,
      AlunonDeactivateGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }