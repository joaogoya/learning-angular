import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FuncionalidadeUmModule } from './funcionalidade-um/funcionalidade-um.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FuncionalidadeUmModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
