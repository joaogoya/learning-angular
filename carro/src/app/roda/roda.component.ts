import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'roda',
  templateUrl: './roda.component.html',
  styleUrls: ['./roda.component.css']
})
export class RodaComponent implements OnInit {

  @Input() roda = "";
 
  constructor() { }

  ngOnInit() {
  }

}
