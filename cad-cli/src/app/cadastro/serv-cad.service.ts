import { Injectable } from '@angular/core';

@Injectable()
export class ServCadService {

  constructor() {}

  infos:string[] = ['a', 'b', 'c', 'd',]
  contador = 0;
  executaVetor(impsum){
    this.infos[this.contador] = impsum;
    this.contador ++;
    return this.infos;
  }

  infos2:string[] = ['a', 'b', 'c', 'd',]
  contador2 = 0;
  populaVetor(ddd){
    this.infos2[this.contador2] = ddd;
    this.contador2++;
  }

  buscaVetor(){
    return this.infos2;
  }
}
