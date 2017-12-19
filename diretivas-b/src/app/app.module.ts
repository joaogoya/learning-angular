import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DiretivaTesteDirective } from './shared/diretiva-teste.directive';
import { TesteDiretiva2Directive } from './shared/teste-diretiva2.directive';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    DiretivaTesteDirective,
    TesteDiretiva2Directive
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
