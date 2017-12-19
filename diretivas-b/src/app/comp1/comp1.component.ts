import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  
  /*diretivas estruturais*/
  cursos2:string[] = ['angular', 'java', 'javascrip', 'html'];
  exibeCursos2: boolean = true;
  alteraEstadoCursos2(){
    this.exibeCursos2 = !this.exibeCursos2;
  }

  //exe 02
  variavel12:boolean = true;
  btAlteraCont(){
    this.variavel12 = !this.variavel12;
  }


  /* fom diretivas estruturais */



  constructor() {}
  ngOnInit() {}

  aba:string = "home";
  cursos: string[] = ['Java Script Orientado', 'Angular', 'PHP OO', 'C#', 'SQL Server', 'HTML', 'CSS'];


  meuFavorito: boolean = true;
  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

  ativo: boolean = false;
  mudar(){
    this.ativo = !this.ativo;
  }

  ativo2: boolean = false;
  mudar2(){
    this.ativo2 = !this.ativo2;
  }

  tarefa: any = {
    desc: 'Descricao da tardefa',
    responsavel: null 
  }


}
