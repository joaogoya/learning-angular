import { Injectable } from '@angular/core';

@Injectable()
export class ServicoUmService {

  constructor() { }

  getCursos(){
    return ['lorem', 'imspum', 'dolor', 'teste', 'aaaaa', 'vãobvua'];
  }


  metodoTeste(a, b){
    return a + b;
  }

}
