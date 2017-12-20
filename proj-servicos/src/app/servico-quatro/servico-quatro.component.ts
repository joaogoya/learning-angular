import { Component, OnInit } from '@angular/core';
import { ModelService } from '../servico-tres/model.service';

@Component({
  selector: 'app-servico-quatro',
  templateUrl: './servico-quatro.component.html',
  styleUrls: ['./servico-quatro.component.css']
})

export class ServicoQuatroComponent implements OnInit {
  infos3: string[];

  constructor(private objModel: ModelService) {}
  
  addNovaInfo(addNovaInfo: string) { 
    this.objModel.addInfo(addNovaInfo); 
  }
  
  ngOnInit() { 
    this.infos3 = this.objModel.getInfosBase(); 
  }
}
