
import { Component, OnInit } from '@angular/core';

import { ClServUmService } from './cl-serv-um.service';


@Component({
  selector: 'app-comp-func-um',
  templateUrl: './comp-func-um.component.html',
  styleUrls: ['./comp-func-um.component.css']
})
export class CompFuncUmComponent implements OnInit {

  vetTeste: string[];

  constructor( private servico: ClServUmService ) { 
    this.vetTeste = this.servico.metodo01();

  }

  ngOnInit() {
  }

}
