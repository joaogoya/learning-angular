import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
    imports:[
        CommonModule, 
        CursosRoutingModule
    ],
    exports:[],
    declarations:[
        CursosComponent,
        CursoDetalheComponent
    ],
    providers:[CursosService]
})

export class CursosModule{}