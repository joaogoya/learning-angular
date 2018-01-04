import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
    imports:[
        CommonModule, 
        AppRoutingModule
    ],
    exports:[],
    declarations:[
        CursosComponent,
        CursoDetalheComponent
    ],
    providers:[CursosService]
})

export class CursosModule{}