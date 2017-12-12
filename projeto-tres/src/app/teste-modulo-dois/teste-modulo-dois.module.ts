import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteModuloDoisComponent } from './teste-modulo-dois.component';
import { ComponenteDetalheComponent } from './componente-detalhe/componente-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TesteModuloDoisComponent, ComponenteDetalheComponent],
  exports: [TesteModuloDoisComponent, ComponenteDetalheComponent],
})
export class TesteModuloDoisModule { }
