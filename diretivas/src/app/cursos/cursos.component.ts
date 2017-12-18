import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  mostraCursos: boolean = false;
  
  constructor() {}
  ngOnInit() {}

  mudarCursos(){
    if(this.mostraCursos == true){
      this.mostraCursos = false;
      this.cursos[1] = null;
    }
    else{
      this.mostraCursos = true;
      this.cursos[1] = "Angular";
    }

  }

}
