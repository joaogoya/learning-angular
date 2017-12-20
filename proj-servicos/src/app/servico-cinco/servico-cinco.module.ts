import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicoCincoComponent } from './servico-cinco.component';
import { ModelCincoService } from './model-cinco.service';

@NgModule({
  declarations: [
    ServicoCincoComponent,
  ],
  imports: [
    CommonModule,
  ],
  //providers: [ModelCincoService],
  exports: [ServicoCincoComponent]
})
export class ServicoCincoModule { }
