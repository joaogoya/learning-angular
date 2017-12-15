import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {
  constructor() { }
  ngOnInit() {}

  
  @Input() valorValue: number;

  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valorValue++;
    this.mudouValor.emit({novoValor: this.valorValue});
    console.log("incrementa componente filho");
  }
  decrementa(){
    this.valorValue--;
    this.mudouValor.emit({novoValor: this.valorValue});
    console.log("decrementa componente filho");
  }

}
