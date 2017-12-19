import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDiretivaTeste8]'
})

export class DiretivaTeste8Directive {
  @HostBinding('style.backgroundColor') variavel:string;
  @HostListener('mouseenter') nomeMetodo(){ this.variavel = "tomato"; }
  @HostListener('mouseleave') nomeMetodoDois(){ this.variavel = 'yellow'; }
  constructor() {}
}
