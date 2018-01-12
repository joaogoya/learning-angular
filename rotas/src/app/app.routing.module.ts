import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guard/auth.guard';
import { CursosGuard } from './guard/curso.guard';
import { AlunosGuard } from './guard/alunos.guard';

const appRoutes: Routes = [

    /*lazy load*/
    { path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule', 
        canActivate: [AuthGuardService],
        canActivateChild: [CursosGuard]
    },
    
    { path:'aluno', 
        loadChildren: 'app/aluno/alunos.module#AlunosModule', 
        canActivate: [AuthGuardService],
        canActivateChild: [AlunosGuard]
    },

    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
]; 

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}