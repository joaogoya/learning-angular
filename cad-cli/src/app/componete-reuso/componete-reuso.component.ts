import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'componete-reuso',
  templateUrl: './componete-reuso.component.html',
  styleUrls: ['./componete-reuso.component.css']
})
export class ComponeteReusoComponent implements OnInit {

  /* Primrira maneira */
  //@Input() infoParaTestar:string = '';

  /* 
    Segunda maneira 
    assim, la no cad-cli trabalhamos com a variavel chamada infoParaTestar
    E aqui no componente reuso usamos a mesma variavel, mas com outro nome, nesse caso, outroNomeQualquer
  */
  @Input('infoParaTestar') outroNomeQualquer:string = '';

  constructor() { }

  ngOnInit() {
  }

}
