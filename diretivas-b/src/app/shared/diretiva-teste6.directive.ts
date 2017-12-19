import {
  Directive,
  HostListener,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[appDiretivaTeste6]'
})
export class DiretivaTeste6Directive {

  @HostListener('mouseenter') aplicaCorUm() {
    this.metodoRender.setElementStyle(this.elementoReferenciado.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') aplicaCorDois() {
    this.metodoRender.setElementStyle(this.elementoReferenciado.nativeElement, 'background-color', 'yellow');
  }
  constructor(private elementoReferenciado: ElementRef, private metodoRender: Renderer) {}
}
