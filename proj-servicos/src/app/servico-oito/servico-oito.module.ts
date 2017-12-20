/*bibliotecas do angular*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicoOitoComponent } from './servico-oito.component';
import { ModelCincoService } from '../servico-cinco/model-cinco.service';

@NgModule({
  declarations: [
    ServicoOitoComponent
  ],
  imports: [CommonModule],
  exports:[ServicoOitoComponent]
})
export class ServicoOitoModule { }
