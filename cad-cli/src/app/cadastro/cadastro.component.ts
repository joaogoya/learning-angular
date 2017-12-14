import { AppComponent } from './../../../../projeto-aula-modulos/src/app/app.component';

import { Component, OnInit } from '@angular/core';
import { ServCadService } from './serv-cad.service';

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

  alertaTeste(){
    alert('teste');
    this.pessoa.nome = (<HTMLInputElement>document.getElementById("mytext")).value;
    console.log(this.pessoa.nome);
    this.pessoa.nome = " ";
    console.log('Pessoa.nome'+this.pessoa.nome);
    return this.pessoa.nome;
  }

  /*Popula vetor*/
  infos:string[] = ['a', 'b', 'c', 'd',]
  contador = 0
  populaVetor(){
    this.infos[this.contador] = (<HTMLInputElement>document.getElementById("infoVetor")).value
    this.contador ++;
}

  /*Popula vetor com classe de servico*/
  infos2:string[] = ['a', 'b', 'c', 'd',]
  lorem = new ServCadService();
  populaVetor2(){
    var aaa = (<HTMLInputElement>document.getElementById("infoVetor2")).value
    this.infos2 = this.lorem.executaVetor(aaa);
  }


  /*popula vetor e imprime vetor*/
  infos3:string[] = ['a', 'b', 'c', 'd',]
  lorem2 = new ServCadService();

  populaVetor3(){
      var ddd = (<HTMLInputElement>document.getElementById("infoVetor3")).value
      this.lorem2.populaVetor(ddd);
  }

  imprimeVet(){
    this.infos3 = this.lorem2.buscaVetor(); 
  }

  /* 
    Reutilização de ocmponentes
    Esta informação está sendo setada no cad-cli e printada no html do componente reuso.
  */
  infoTeste:string = "Apenas um teste sfegasrh";

  



  constructor() {}
  ngOnInit() {}

}
