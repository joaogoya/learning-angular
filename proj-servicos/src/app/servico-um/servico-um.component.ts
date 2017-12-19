import { Component, OnInit } from '@angular/core';

import { ServicoUmService } from './servico-um.service';

@Component({
  selector: 'app-servico-um',
  templateUrl: './servico-um.component.html',
  styleUrls: ['./servico-um.component.css']
})

export class ServicoUmComponent implements OnInit {

  carros:string[] = [];

  constructor( private servUm: ServicoUmService )  {
    this.carros = this.servUm.getCarros();
  }

  ngOnInit() {}

}
