import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-tres',
  templateUrl: './func-tres.component.html',
  styleUrls: ['./func-tres.component.css']
})
export class FuncTresComponent implements OnInit {

  constructor() { }

  btClicado(){
    alert('clicou!');
  }

  valorAtual:string;
  inputKeyUp(evento: KeyboardEvent){
    //console.log(evento);
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  texto:string = 'out';
  mo:boolean = false;
  MouseOver(){
    
    this.mo = !this.mo;
    if(this.mo == true){
      this.texto = "over"; 
    }
    else{
      this.texto = 'out';
    }
  }

  ngOnInit() {
  }

}
