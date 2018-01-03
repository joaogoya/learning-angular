import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CursosService } from '../cursos/cursos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id:number;
  inscricao: Subscription;
  nomeCurso:string;

  constructor(
    private rota: ActivatedRoute, 
    private cursoService: CursosService,
    private router: Router
    ) { 
    this.id = this.rota.snapshot.params['id'];
    console.log(this.rota);
  }

  ngOnInit() { 
    this.inscricao = this.rota.params.subscribe(
      (paramas: any) => {
        this.id = paramas['id'];
        this.nomeCurso = this.cursoService.getNoemById(this.id);
        if(this.nomeCurso == null){
          //this.router.navigate(['rota desejada']);
          this.router.navigate(['']); //nesse caso ta em branco pq direciono p home
        }
      }  
    );
  }
  
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
