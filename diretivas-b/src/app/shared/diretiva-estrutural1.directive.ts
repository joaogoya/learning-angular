import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplateAst } from '@angular/compiler';

@Directive({
  selector: '[ngElse]'
})
export class DiretivaEstrutural1Directive {
  @Input() set ngElse(lorem:boolean){
    if(lorem){
      this.nome2.createEmbeddedView(this.nome1);
    }
    else{
      console.log('entrou no clear');
      this.nome2.clear();
    }
  }
  constructor( private nome1: TemplateRef<any>, private nome2: ViewContainerRef ) {}
}
