import { Component } from '@angular/core';
import { ServicoUmService } from './servico-um.service';

@Component({
  selector: 'app-componente-solto-01',
  templateUrl: './componente-solto-01.component.html',
  styleUrls: ['./componente-solto-01.component.css']
})

export class ComponenteSolto01Component {
  nome : string ;
  cursos: string[];
  numero: number = 0;

  constructor(private servico: ServicoUmService) {
      this.nome = "Apenas uma string";

      /*assim é um for normal, mas da pra fazer no template, com uma diretiva
      for( let i = 0; i <= this.cursos.length; i++){
          let curso = this.cursos[i];
      }
      */

      //var servico = new ServicoUmService();
      this.cursos = this.servico.getCursos();
      this.numero = this.servico.metodoTeste(10, 2500);
    }

}
