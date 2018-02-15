import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control',
  templateUrl: './campo-control.component.html',
  styleUrls: ['./campo-control.component.css']
})
export class CampoControlComponent implements OnInit {

  @Input() mostrarControle: boolean;
  @Input() msgErro: string;
  @Input() campo: any;

  constructor() { }

  ngOnInit() {}

  campoTouched() {
    // return this.campo.touched;
    return this.campo;
  }
}
