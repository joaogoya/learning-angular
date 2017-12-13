import { Injectable } from '@angular/core';

@Injectable()
export class ClServUmService {

  constructor() { }

  metodo01(){
    return ['aa', 'bb', 'cc', 'dd', 'ff', 'aa', 'bb', 'cc', 'dd', 'ff']
  }

}
