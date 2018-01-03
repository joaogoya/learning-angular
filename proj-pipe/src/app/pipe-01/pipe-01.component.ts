import {
  Component,
  OnInit
} from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-pipe-01',
  templateUrl: './pipe-01.component.html',
  styleUrls: ['./pipe-01.component.css']
})
export class Pipe01Component implements OnInit {

  livro: any = {
    titulo: 'Js for dummies',
    rating: 4.59,
    numeroPaginas: 250,
    preco: 68.30,
    dataLancamento: new Date(2016, 5, 18),
    url: 'https://www.google.com.br'
  }

  livros: string[] = ['Angular 2', 'PHP', 'JS'];

  filtro: string;

  valueAssinc = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor assincrono'), 2000 ) 
  });



  constructor() {}

  ngOnInit() {}

  addCurso(v) {
    console.log(this.livros);
    this.livros.push(v);
  }

  filtrarLivros() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
      (v) => {
        if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
          return true;
        }
        return false;
      });
  }
}
