import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DiretivaTesteDirective } from './shared/diretiva-teste.directive';
import { TesteDiretiva2Directive } from './shared/teste-diretiva2.directive';
import { DiretivaTeste3Directive } from './diretiva-teste3.directive';
import { DiretivaTeste5Directive } from './shared/diretiva-teste5.directive';
import { DiretivaTeste6Directive } from './shared/diretiva-teste6.directive';
import { DiretivaTeste7Directive } from './shared/diretiva-teste7.directive';
import { DiretivaTeste8Directive } from './shared/diretiva-teste8.directive';
import { DiretivaTeste9Directive } from './shared/diretiva-teste9.directive';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    DiretivaTesteDirective,
    TesteDiretiva2Directive,
    DiretivaTeste3Directive,
    DiretivaTeste5Directive,
    DiretivaTeste6Directive,
    DiretivaTeste7Directive,
    DiretivaTeste8Directive,
    DiretivaTeste9Directive
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
