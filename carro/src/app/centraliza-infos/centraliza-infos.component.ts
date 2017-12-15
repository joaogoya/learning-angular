import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centraliza-infos',
  templateUrl: './centraliza-infos.component.html',
  styleUrls: ['./centraliza-infos.component.css']
})

export class CentralizaInfosComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  /* aula 12 */
  roda = {
      aro : ' ',
      fabricante: ' ',
      cor: ' '
  }
  salvarRoda(){
   this.roda.aro = (<HTMLInputElement>document.getElementById('aro')).value;
   this.roda.fabricante = (<HTMLInputElement>document.getElementById('fabricante')).value;
   this.roda.cor = (<HTMLInputElement>document.getElementById('cor')).value;
 }

/*aula 13*/
 infosRoda = "aaaaaaaa";
 infosPorta = "Infos Porta no componente centraliza";
 infosSuspencao = "Infos suspencao no centraliza";
 infosVolante = "Infos de volante no centraliza";

 /* aula 14 */
 infoValor:number = 106;
 infoTeste:number = 0;
 alteraValor(evento){
   console.log(evento.novoValor);
   this.infoTeste = evento.novoValor *3
 }
}
