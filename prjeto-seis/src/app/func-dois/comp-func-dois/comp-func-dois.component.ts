import { Component, OnInit } from '@angular/core';
import { ClSerFuncDoisService } from './cl-ser-func-dois.service';

@Component({
  selector: 'app-comp-func-dois',
  templateUrl: './comp-func-dois.component.html',
  styleUrls: ['./comp-func-dois.component.css']
})
export class CompFuncDoisComponent implements OnInit {
  nome: string;
  constructor(private pessoa: ClSerFuncDoisService) {
    this.nome = "Lorem";
    this.nome = this.pessoa.metodoUm();
   }
  ngOnInit() {
  }
}
