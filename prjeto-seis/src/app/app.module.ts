
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FuncionalidadeUmModule } from './funcionalidade-um/funcionalidade-um.module';
import { FuncDoisModule } from './func-dois/func-dois.module';
import { FuncTresComponent } from './func-tres/func-tres.component';


@NgModule({
  declarations: [
    AppComponent,
    FuncTresComponent,
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
