
import { NgModule } from "@angular/core";

import { RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoComponent } from './aluno.component';

const AlunosRoutes = [
    { path: 'aluno', component: AlunoComponent, children : [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/edit', component: AlunoFormComponent }
    ] }
]

@NgModule({
    imports:[RouterModule.forChild(AlunosRoutes)],
    exports:[RouterModule],
    declarations:[],
    providers:[]
})

export class AlunoRoutingModule{}