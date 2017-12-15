import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-volante',
  templateUrl: './volante.component.html',
  styleUrls: ['./volante.component.css']
})
export class VolanteComponent implements OnInit {

  @Input() volante = '';

  constructor() { }

  ngOnInit() {
  }

}
