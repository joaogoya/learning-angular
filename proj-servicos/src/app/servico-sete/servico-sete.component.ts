import { Component, OnInit } from '@angular/core';
import {ModelSeteService} from './model-sete.service';

@Component({
  selector: 'app-servico-sete',
  templateUrl: './servico-sete.component.html',
  styleUrls: ['./servico-sete.component.css'],
  providers: [ModelSeteService]
})
export class ServicoSeteComponent implements OnInit {

    infos7:string[];
    constructor(private objModel: ModelSeteService) {}
  
    ngOnInit() {
      this.infos7 = this.objModel.getInfo();
    }
  
    addInfo7(info5:string){
      this.objModel.addinfo(info5);
    }

}
