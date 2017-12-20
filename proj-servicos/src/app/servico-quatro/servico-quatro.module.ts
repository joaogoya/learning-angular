import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicoQuatroComponent } from './servico-quatro.component';
import { ModelService } from '../servico-tres/model.service';

@NgModule({
  declarations: [
    ServicoQuatroComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers: [ModelService],
  exports:[ServicoQuatroComponent]
})
export class servicoQuatro { }
