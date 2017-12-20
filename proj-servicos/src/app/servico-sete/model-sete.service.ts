import { ModelCincoService } from './../servico-cinco/model-cinco.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModelSeteService {

    emitirInfoAdicionada = new EventEmitter<string>();
    static criouNovaInfoNaModel = new EventEmitter<string>();

    infos:string[] = ['hhhhhh', 'bbbb', 'fffffff']
  
    constructor() {}
  
    getInfo(){
      return this.infos;
    }
  
    addinfo(info5:string){
      this.infos.push(info5);
      this.emitirInfoAdicionada.emit(info5);
      ModelSeteService.criouNovaInfoNaModel.emit(info5);
    }

}
