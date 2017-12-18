import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  constructor() {}
  ngOnInit() {}

  aba:string = "home";
  cursos: string[] = ['Java Script Orientado', 'Angular', 'PHP OO', 'C#', 'SQL Server', 'HTML', 'CSS'];


  meuFavorito: boolean = true;
  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

}