import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicoSeteComponent } from './servico-sete.component';
import { ModelSeteService } from './model-sete.service';
import { ServicoOitoModule } from '../servico-oito/servico-oito.module';

@NgModule({
  declarations: [
    ServicoSeteComponent,
  ],
  imports: [
    CommonModule,
    ServicoOitoModule
  ],
  exports: [ServicoSeteComponent],
})
export class ServicoSeteModule { }
