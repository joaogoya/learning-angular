import { Component, OnInit } from '@angular/core';
import { ModelCincoService } from '../servico-cinco/model-cinco.service';

@Component({
  selector: 'app-servico-seis',
  templateUrl: './servico-seis.component.html',
  styleUrls: ['./servico-seis.component.css'],
  providers: [ModelCincoService],
})
export class ServicoSeisComponent implements OnInit {

  infos6 = [];

  constructor(private ojdModel: ModelCincoService) { }

  ngOnInit() {
    this.infos6 = this.ojdModel.getInfo();
  }
  addInfo6(info:string){
    this.ojdModel.addinfo(info);
  }
}
