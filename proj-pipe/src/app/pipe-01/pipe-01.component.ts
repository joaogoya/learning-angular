import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-01',
  templateUrl: './pipe-01.component.html',
  styleUrls: ['./pipe-01.component.css']
})
export class Pipe01Component implements OnInit {

  livro:any = {
    titulo: 'Js for dummies',
    rating: 4.59,
    numeroPaginas: 250,
    preco: 68.30,
    dataLancamento: new Date(2016, 5, 18),
    url:'https://www.google.com.br'
  }

  constructor() { }

  ngOnInit() {}

}
