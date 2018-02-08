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
    this.user.nome = 'joao';
    this.user.email = 'a@b.com';
    this.user.cep = '91720-090';
    this.user.numero = 737;
    this.user.complemento = 118;
    this.user.rua = 'Carvalho de Freitas';
    this.user.bairro = 'Teresópolis';
    this.user.cidade = 'Porto Alegre';
    this.user.estado = 'RS';
  }

  ngOnInit() {}

  onSubmit(form) {
    console.log(form);
    console.log(this.user.nome);
  }

  private testaCampoValido(campo) {
    return campo.valid && campo.touched;
  }

  public aplicaCssFeedback(campo) {
    if (campo.touched) {
      return {
        'has-error': !this.testaCampoValido(campo),
        'has-success': this.testaCampoValido(campo),
        'has-feedback': campo.touched,
      }
    }
  }
}
