import { AppComponent } from './../../../../projeto-aula-modulos/src/app/app.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome1: string = "Lorem";
  nome2: string = "ddd";
  nome3: string = "ggg";

  pessoa = {
    nome: "aaaaa",
    telefone: "33333",

  }
   
  constructor() {}

  ngOnInit() {}

}
