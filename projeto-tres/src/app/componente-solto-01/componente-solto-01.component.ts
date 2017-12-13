import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-solto-01',
  templateUrl: './componente-solto-01.component.html',
  styleUrls: ['./componente-solto-01.component.css']
})
export class ComponenteSolto01Component {

  nome : string ;

  cursos: string[] =  ['lorem', 'imspum', 'dolor'];

  constructor() {
      this.nome = "Apenas uma string";

      /*assim é um for normal, mas da pra fazer no template, com uma diretiva
      for( let i = 0; i <= this.cursos.length; i++){
          let curso = this.cursos[i];
      }
      */
    }

}
