import {
  Directive,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appDiretivaTeste9]'
})

export class DiretivaTeste9Directive {
  @HostBinding('style.backgroundColor') nomeVariavel: string;
  @HostListener('mouseenter') metodoUm() { this.nomeVariavel = this.variavel02; }
  @HostListener('mouseleave') metoDois() { this.nomeVariavel = this.variavel01; }
  @Input() variavel01: string = '';
  @Input() variavel02: string = '';
  constructor() {}
}
