import { AppComponent } from './../../../../projeto-aula-modulos/src/app/app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nomes: string[];
  telefones: number[];
  contador: number = 0;

  constructor() { }

  v ;
    capturaElemento(){
      this.v = document.getElementById("Text1").value;
      console.log(this.v);
      this.v = "";
      this.contador++;
    }
  ngOnInit() {
  }

}
