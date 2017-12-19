import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplateAst } from '@angular/compiler';

@Directive({
  selector: '[appDiretivaEstrutural2]'
})
export class DiretivaEstrutural2Directive {

  @Input() set appDiretivaEstrutural2(impsum:boolean){
    if(!impsum){
      console.log(impsum);
      this.var2.createEmbeddedView(this.var1);
    }
    else{
      this.var2.clear();
    }
  }

  constructor(private var1:TemplateRef<any>, private var2:ViewContainerRef) { }

}
