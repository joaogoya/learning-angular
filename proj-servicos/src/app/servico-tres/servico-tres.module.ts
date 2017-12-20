import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicoTresComponent } from './servico-tres.component';
import { ModelService } from './model.service';

@NgModule({
  declarations: [
    ServicoTresComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers: [ModelService],
  exports:[ServicoTresComponent]
})
export class servicoTres { }
