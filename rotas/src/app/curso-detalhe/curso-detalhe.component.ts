import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id:number;
  inscricao: Subscription;

  constructor(private rota: ActivatedRoute) { 
    this.id = this.rota.snapshot.params['id'];
    console.log(this.rota);
  }

  ngOnInit() { 
    this.inscricao = this.rota.params.subscribe(
      (paramas: any) => {
        this.id = paramas['id'];
      }  
    );
  }
  
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
