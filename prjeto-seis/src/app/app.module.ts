
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FuncionalidadeUmModule } from './funcionalidade-um/funcionalidade-um.module';
import { FuncDoisModule } from './func-dois/func-dois.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FuncionalidadeUmModule,
    FuncDoisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
