import { Injectable } from '@angular/core';

@Injectable()
export class ClServicoService {

  private infos:string[] = ['Lorem', 'Impsum', 'Dolor'];

  constructor() {
    console.log('Instanciu Servico')
   }
  
   getInfos(){
    return this.infos;
  }

  addInfooo( infoAdd:string ){
    this.infos.push(infoAdd);
  }

}
