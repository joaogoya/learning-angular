import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user:any = {
    nome: null,
    email: null
  }

  constructor() { }

  ngOnInit() { }

  onSubmit(f){
    console.log(f);
    console.log(this.user);
  }

}
