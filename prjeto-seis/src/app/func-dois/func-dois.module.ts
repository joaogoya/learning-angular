import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompFuncDoisComponent } from './comp-func-dois/comp-func-dois.component';
import { ClSerFuncDoisService } from './comp-func-dois/cl-ser-func-dois.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompFuncDoisComponent],
  exports:[CompFuncDoisComponent],
  providers:[ClSerFuncDoisService],
})
export class FuncDoisModule { }
