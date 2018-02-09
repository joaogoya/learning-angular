import { Usuario } from './../../../../rotas/src/app/login/usuario';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  private user: User = new User;

  constructor(private http: Http) {
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

  public buscaCep(event: any) {
    const cep = event.replace(/\D/g, '');
    console.log(cep);
    const validacep = /^[0-9]{8}$/;
    if (validacep.test(cep)) {
      this.http.get('//viacep.com.br/ws/' + cep + '/json')
      .map(data => data.json())
      .subscribe(dadosCep => {
        console.log(dadosCep);
        this.user.cidade = dadosCep.localidade;
        console.log(this.user.cidade);
        this.user.bairro = dadosCep.bairro;
        this.user.rua = dadosCep.logradouro;
      });
    }
  }

}
