import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos:any[]; 
  pagina:number;
  inscricao: Subscription;

  constructor(
    private cursoSService: CursosService,
    private activateRoute: ActivatedRoute,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.cursos = this.cursoSService.getCursos();
    this.inscricao = this.activateRoute.queryParams.subscribe(
      (queryParams) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }
  aumentaPagina(){
    this.pagina ++;
    this.router.navigate(['/cursos'], {queryParams: { 'pagina': this.pagina }});
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
