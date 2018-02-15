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
    /* this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormGroup(null),
    }); */

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit(form) {
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
    .map(response => response)
    .subscribe(dadosRetornados => {
      console.log(dadosRetornados);
      this.resetFrom();
    },
    (error: any) => alert('erro')
  );
  }

  resetFrom() {
    console.log('reset');
    this.form.reset();
  }

  public campoTouched(campo) {
    return this.form.get(campo).touched;
  }

  private testaCampoValido(campo) {
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


}
