import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
      nome: [null],
      email: [null]
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


}
