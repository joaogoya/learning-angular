import { Injectable } from '@angular/core';

@Injectable()
export class ServicoUmService {

  getCarros(){
    return ['palio', 'corsa', 'fiesta', 'gol'];
  }

  constructor() { }

}
