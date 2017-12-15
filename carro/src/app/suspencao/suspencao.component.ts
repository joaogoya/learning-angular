import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suspencao',
  templateUrl: './suspencao.component.html',
  styleUrls: ['./suspencao.component.css']
})
export class SuspencaoComponent implements OnInit {

  @Input() suspencao = "";

  constructor() { }

  ngOnInit() {
  }

}
