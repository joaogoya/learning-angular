import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-porta',
  templateUrl: './porta.component.html',
  styleUrls: ['./porta.component.css']
})
export class PortaComponent implements OnInit {

  @Input() porta = "";

  constructor() { }

  ngOnInit() {
  }

}
