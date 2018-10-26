
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { CadastrarRefatoradoComponent } from './cadastrar-refatorado/cadastrar-refatorado.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'refatorado', component: CadastrarRefatoradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
