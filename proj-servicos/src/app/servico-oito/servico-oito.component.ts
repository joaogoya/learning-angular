import { Component, OnInit } from '@angular/core';
import { ModelSeteService } from '../servico-sete/model-sete.service'

@Component({
  selector: 'app-servico-oito',
  templateUrl: './servico-oito.component.html',
  styleUrls: ['./servico-oito.component.css'],
  providers:[ModelSeteService]
})
export class ServicoOitoComponent implements OnInit {

  constructor(private objModel:ModelSeteService) {}

  infos8:string[];

  ngOnInit() {
    this.infos8 = this.objModel.getInfo();
  }

  addNovaInfo8(e){
    this.objModel.addinfo(e);
  }

}
