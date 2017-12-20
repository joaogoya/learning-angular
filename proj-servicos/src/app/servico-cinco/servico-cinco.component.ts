import {
  Component,
  OnInit
} from '@angular/core';

import {
  ModelCincoService
} from './model-cinco.service';

@Component({
  selector: 'app-servico-cinco',
  templateUrl: './servico-cinco.component.html',
  styleUrls: ['./servico-cinco.component.css'],
  providers: [ModelCincoService]
})
export class ServicoCincoComponent implements OnInit {

  infos4: string[];

  constructor(private objModel: ModelCincoService) {}

  ngOnInit() {
    this.infos4 = this.objModel.getInfo();
  }

  addInfo5(info5: string) {

    this.objModel.addinfo(info5);
  }
}
