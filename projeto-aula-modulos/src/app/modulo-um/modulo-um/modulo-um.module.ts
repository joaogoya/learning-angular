import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModuloUmComponent } from './modulo-um.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModuloUmComponent,
  ],
  exports: [
    ModuloUmComponent
  ],
})
export class ModuloUmModule { }
