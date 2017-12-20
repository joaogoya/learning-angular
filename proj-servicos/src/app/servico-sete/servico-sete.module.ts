import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicoSeteComponent } from './servico-sete.component';
import { ModelSeteService } from './model-sete.service';

@NgModule({
  declarations: [
    ServicoSeteComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ServicoSeteComponent]
})
export class ServicoSeteModule { }
