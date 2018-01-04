import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {

  private alunos: any [] = [
    { id: 1, nome: 'joao', email: 'joao@email.com'},
    { id: 2, nome: 'Paulo', email: 'paulo@email.com' }
  ]

  getAlunos(){
    return this.alunos;
  }

  getAlunoById(id:any){
    let alunos = this.alunos;
    for(let al of alunos){
      if(al.id == id){
        return al;
      }
    }
    return null;
  }

  constructor() { }

}
