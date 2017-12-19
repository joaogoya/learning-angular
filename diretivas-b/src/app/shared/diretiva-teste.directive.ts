import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[DiretivaTeste]'
})
export class DiretivaTesteDirective {

  constructor(
    private lorem: ElementRef,
    private impsum: Renderer
    ) {
      //console.log(this.impsum);
      //this.lorem.nativeElement.style.backgroundColor = "greenyellow";
      this.impsum.setElementStyle(this.lorem.nativeElement, 'background-color','greenyellow');
   }

}
