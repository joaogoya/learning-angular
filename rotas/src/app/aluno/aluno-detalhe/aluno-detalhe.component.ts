import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno:any;
  inscricao: Subscription;
   id: any;

  constructor( private rota: ActivatedRoute, private alunoService: AlunoService, private router: Router) {

  }

  ngOnInit() {
    this.inscricao = this.rota.params.subscribe(
      (params:any)=>{
        this.id = params['id'];

        this.aluno = this.alunoService.getAlunoById(this.id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarAluno(){
    this.router.navigate(['/aluno', this.aluno.id, 'edit'])
  }

}
