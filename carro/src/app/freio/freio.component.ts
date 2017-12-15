import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-freio',
  templateUrl: './freio.component.html',
  styleUrls: ['./freio.component.css']
})
export class FreioComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  @Input() texto = "";
  @Input() texto2 = "";

  @Output() mandaEvento = new EventEmitter();

  primeiroNumero: number = 0;
  segundoNumero: number = 0;
  resultado: number = 0;
  operacao: number = 0;
  soma() {
    //O angular concatena???
    this.primeiroNumero = (<HTMLIFrameElement>document.getElementById("primeiro")).value; 
    this.segundoNumero = (<HTMLIFrameElement>document.getElementById("segundo")).value;
    this.resultado = this.primeiroNumero + this.segundoNumero;
    this.operacao = 1;
    this.mandaEvento.emit({ dadoEnviado: this.operacao });
    //console.log(this.resultado);
  }

  diminui() {
    this.primeiroNumero = (<HTMLIFrameElement>document.getElementById("primeiro")).value;
    this.segundoNumero = (<HTMLIFrameElement>document.getElementById("segundo")).value;
    this.resultado = this.primeiroNumero - this.segundoNumero;
    this.operacao = 2;
    this.mandaEvento.emit({ dadoEnviado: this.operacao });
    //console.log(this.resultado);
  }

  multiplica() {
    this.primeiroNumero = (<HTMLIFrameElement>document.getElementById("primeiro")).value;
    this.segundoNumero = (<HTMLIFrameElement>document.getElementById("segundo")).value;
    this.resultado = this.primeiroNumero * this.segundoNumero;
    this.operacao = 3;
    this.mandaEvento.emit({ dadoEnviado: this.operacao });
    //console.log(this.resultado);
  }

  divide() {
    this.primeiroNumero = (<HTMLIFrameElement>document.getElementById("primeiro")).value;
    this.segundoNumero = (<HTMLIFrameElement>document.getElementById("segundo")).value;
    this.resultado = this.primeiroNumero / this.segundoNumero;
    this.operacao = 4;
    this.mandaEvento.emit({ dadoEnviado: this.operacao });
    //console.log(this.resultado);
  }

  /* exe 01 fixação aula 14 */
  @Output() mandaEventoTeste = new EventEmitter();
  variavel: string = ""
  eTeste(){
    this.variavel = "textto teste";
    this.mandaEventoTeste.emit({ dadoEnviado2: this.variavel });
  }
}
