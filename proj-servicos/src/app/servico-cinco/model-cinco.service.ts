import {
  Injectable
} from '@angular/core';

@Injectable()
export class ModelCincoService {

  infos: string[] = ['aaaa', 'bbbb', 'fffffff'];

  constructor() {}

  getInfo() {
    return this.infos;
  }

  addinfo(info5: string) {
    this.infos.push(info5);
  }
}
