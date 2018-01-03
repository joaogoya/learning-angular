import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos(){
    return [
      {id: 1, nome:'angular'},
      {id: 2, nome:'js'}
    ];
  }

  getNoemById(id: number){
    let cursos = this.getCursos();
    for(let c of cursos){
      if(c.id == id){
        return c.nome;
      }
    }
    return null;
  }

  constructor(){}
}
