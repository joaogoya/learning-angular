import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AlunoService } from './../aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})

export class AlunoFormComponent implements OnInit {

  aluno: any = {};
  inscricao: Subscription;
  id:any;

  constructor( private rota: ActivatedRoute, private alunoService: AlunoService ){}
  ngOnInit() {
    this.inscricao = this.rota.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.aluno = this.alunoService.getAlunoById(this.id);

        if (this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
