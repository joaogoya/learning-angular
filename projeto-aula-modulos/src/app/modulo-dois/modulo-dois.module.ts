import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloDoisComponent } from './modulo-dois.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModuloDoisComponent],
  exports:[ModuloDoisComponent],
})
export class ModuloDoisModule { }
