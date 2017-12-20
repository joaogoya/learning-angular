import { Component, OnInit } from '@angular/core';

import { ModelService } from './model.service';

@Component({
  selector: 'app-servico-tres',
  templateUrl: './servico-tres.component.html',
  styleUrls: ['./servico-tres.component.css']
})
export class ServicoTresComponent implements OnInit {

  infos2:string [];

  constructor(private objModel:ModelService) {}

  ngOnInit() {
    this.infos2 = this.objModel.getInfosBase();
  }

}
