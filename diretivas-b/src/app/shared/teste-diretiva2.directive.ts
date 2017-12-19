
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appTesteDiretiva2]'
})
export class TesteDiretiva2Directive {

  constructor(private impsum: ElementRef, private lorem: Renderer) {
    console.log(this.lorem);
    console.log(this.impsum);

    this.lorem.setElementStyle(this.impsum.nativeElement, 'background-color', 'red');
   }
}
