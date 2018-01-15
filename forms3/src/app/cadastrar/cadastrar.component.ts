import { Usuario } from './../../../../rotas/src/app/login/usuario';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  private user: User = new User;

  constructor() { 
    this.user.nome='joao';
    this.user.email = "a@b.com"
  }

  ngOnInit() {}

  onSubmit(form){
    console.log(form);
    console.log(this.user.nome);
  }

}
