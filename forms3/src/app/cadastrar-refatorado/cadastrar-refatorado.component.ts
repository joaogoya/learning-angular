import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cadastrar-refatorado',
  templateUrl: './cadastrar-refatorado.component.html',
  styleUrls: ['./cadastrar-refatorado.component.css']
})
export class CadastrarRefatoradoComponent implements OnInit {

  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null, Validators.required],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  private resetFrom() {
    this.form.reset();
  }

  private campoTouched(campo) {
    return this.form.get(campo).touched;
  }

  public testaCampoValido(campo) {
    return this.form.get(campo).valid && this.campoTouched(campo);
  }

  public aplicaCssFeedback(campo) {
    if (this.campoTouched(campo)) {
      return {
        'has-error': !this.testaCampoValido(campo),
        'has-success': this.testaCampoValido(campo),
        'has-feedback': this.form.get(campo).touched,
      };
    }
  }

  public buscaCep() {
    let cep = this.form.get('endereco.cep').value;

     cep = cep.replace(/\D/g, '');

    const validacep = /^[0-9]{8}$/;
    if (validacep.test(cep)) {
      this.http.get('//viacep.com.br/ws/' + cep + '/json')
        .map(data => data.json())
        .subscribe(dadosCep => {
          this.populaDadosForm(dadosCep);
        });
    }
  }

  private populaDadosForm(dados: any) {
    this.form.patchValue({
      endereco: {
        Cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  public onSubmit(form) {
    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
      .map(response => response)
      .subscribe(
        dadosRetornados => {
          this.resetFrom();
        },
        (error: any) => console.log('erro')
      );
    } else {
      console.log('formulario invalido');
     this.verificaCamposValidos(this.form);
    }


  }

  private verificaCamposValidos(grupoCampos: FormGroup) {
    Object.keys(grupoCampos.controls).forEach( controle => {
      const campo = grupoCampos.get(controle);
      campo.markAsTouched();
      if (campo instanceof FormGroup) {
        this.verificaCamposValidos(campo);
      }
    });
  }
}
