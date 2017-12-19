import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appDiretivaTeste7]'
})
export class DiretivaTeste7Directive {

  @HostListener('mouseenter') bolFont(){
    this.metodoRender.setElementStyle(this.elementoReferenciado.nativeElement, 'font-weight', 'bolder');
  }

  constructor(private elementoReferenciado: ElementRef, private metodoRender: Renderer) {}

}
