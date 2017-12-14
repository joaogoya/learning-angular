import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centraliza-infos',
  templateUrl: './centraliza-infos.component.html',
  styleUrls: ['./centraliza-infos.component.css']
})

export class CentralizaInfosComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

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

 infosRoda = "aaaaaaaa";
}
