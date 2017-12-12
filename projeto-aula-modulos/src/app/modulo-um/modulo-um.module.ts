import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloUmComponent } from './modulo-um/modulo-um.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModuloUmComponent,
  ],
  exports: [
    ModuloUmComponent, 
  ],
})
export class ModuloUmModule { }
