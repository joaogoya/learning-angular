import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteUmComponent } from './teste-um.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TesteUmComponent],
  exports: [TesteUmComponent],
})
export class TesteUmModule { }
