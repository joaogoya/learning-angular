import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloTresComponent } from './modulo-tres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModuloTresComponent],
  exports:[ModuloTresComponent], 
})
export class ModuloTresModule { }
