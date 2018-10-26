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

  constructor(private http: Http) {}

  ngOnInit() {}

  onSubmit(form) {
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(t => t)
    .subscribe(s => console.log(s));
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
      };
    }
  }

  public buscaCep(event: any, form: any) {
    const cep = event.replace(/\D/g, '');
    const validacep = /^[0-9]{8}$/;
    if (validacep.test(cep)) {
      this.http.get('//viacep.com.br/ws/' + cep + '/json')
      .map(data => data.json())
      .subscribe(dadosCep => {
        this.populaDadosForm(dadosCep, form);
      });
    }
  }
  private populaDadosForm(dados: any, formulario: any) {
    console.log('fomr no set values');
    console.log(formulario.value.enderecoInfos);
  /*   formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
    }); */

    formulario.form.patchValue({
      enderecoInfos: {
        Cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }
}
