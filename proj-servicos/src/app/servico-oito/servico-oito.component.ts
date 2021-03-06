import { Component, OnInit } from '@angular/core';
import { ModelSeteService } from '../servico-sete/model-sete.service'

@Component({
  selector: 'app-servico-oito',
  templateUrl: './servico-oito.component.html',
  styleUrls: ['./servico-oito.component.css'],
  providers:[ModelSeteService]
})
export class ServicoOitoComponent implements OnInit {

  infos8:string[];
  infoEmitida:string;

  constructor(private objModel:ModelSeteService) {}

  ngOnInit() {
    this.infos8 = this.objModel.getInfo();
    ModelSeteService.criouNovaInfoNaModel.subscribe(
      e => this.infoEmitida = e
    );
  }

  addNovaInfo8(e){ 
    this.objModel.addinfo(e);
    console.log(this.infoEmitida);
  }
}
