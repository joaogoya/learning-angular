
/*bibliotecas do angular*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicoSeisComponent } from './servico-seis.component';
import { ModelCincoService } from '../servico-cinco/model-cinco.service';

@NgModule({
  declarations: [
    ServicoSeisComponent
  ],
  imports: [CommonModule],
  //providers: [ModelCincoService],
  exports:[ServicoSeisComponent]
})
export class ServicoSeisModule { }
