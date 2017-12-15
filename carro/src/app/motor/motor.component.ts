import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('campoInput') campoValorInput: ElementRef ;

  incrementa(){
    //this.valorValue++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valorValue});
    console.log(this.campoValorInput.nativeElement.value);
    console.log("incrementa componente filho");
  }
  decrementa(){
    //this.valorValue--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valorValue});
    console.log("decrementa componente filho");
  }

}
