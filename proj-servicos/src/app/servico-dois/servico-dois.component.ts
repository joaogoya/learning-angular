import { ClSerFuncDoisService } from './../../../../prjeto-seis/src/app/func-dois/comp-func-dois/cl-ser-func-dois.service';
import { Component, OnInit } from '@angular/core';

import{ ClServicoService } from './cl-servico.service';

@Component({
  selector: 'app-servico-dois',
  templateUrl: './servico-dois.component.html',
  styleUrls: ['./servico-dois.component.css']
})
export class ServicoDoisComponent implements OnInit {

  infos: string[];

  constructor(private clServ: ClServicoService) {}

  ngOnInit() {
    this.infos = this.clServ.getInfos();
  }

  addInfo(info:string){
    this.clServ.addInfooo(info);
  }
}
