import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDiretivaTeste5]'
})
export class DiretivaTeste5Directive {
  /*O host listerner fica escutando e o host bidin faz a associação*/
  
  @HostListener('mouseenter') nomeMetodo(){
    //this.impsum.setElementStyle(this.lorem.nativeElement, 'background-color','greenyellow');
    this.nomeVariavel = 'orange'
  }

  @HostListener('mouseleave') nomeMetodo2(){
    //this.impsum.setElementStyle(this.lorem.nativeElement, 'background-color','orange');
    this.nomeVariavel = 'tomato'
  }

  @HostBinding('style.backgroundColor') nomeVariavel:string;

  constructor(/*private lorem: ElementRef, private impsum: Renderer*/) { }

}
