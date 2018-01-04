import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        AlunoComponent,
        AlunoFormComponent,
        AlunoDetalheComponent 
    ],
    exports:[],
    providers:[]
})

export class AlunosModule{}