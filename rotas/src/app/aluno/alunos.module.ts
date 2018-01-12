
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoRoutingModule } from "./aluno.routing.module";
import { AlunoService } from './aluno.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        AlunoRoutingModule,
        FormsModule        
    ],
    declarations:[
        AlunoComponent,
        AlunoFormComponent,
        AlunoDetalheComponent 
    ],
    exports:[],
    providers:[
        AlunoService,
    ]
})

export class AlunosModule{}