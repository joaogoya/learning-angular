
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompFuncUmComponent } from './comp-func-um/comp-func-um.component';
import { ClServUmService } from './comp-func-um/cl-serv-um.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompFuncUmComponent],
  exports: [CompFuncUmComponent],
  providers:[ClServUmService]
})
export class FuncionalidadeUmModule { }
