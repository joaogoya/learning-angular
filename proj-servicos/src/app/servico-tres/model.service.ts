import {
  Injectable
} from '@angular/core';

@Injectable()
export class ModelService {
  InfosModel: string[] = ['dçiv'];
  constructor() {
    console.log('Servico')
  }
  addInfo(infoNova: string) {
    this.InfosModel.push(infoNova);
  }
  getInfosBase() {
    return this.InfosModel;
  }
}
