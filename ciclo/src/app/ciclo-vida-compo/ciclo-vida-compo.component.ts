import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-ciclo-vida-compo',
  templateUrl: './ciclo-vida-compo.component.html',
  styleUrls: ['./ciclo-vida-compo.component.css']
})

export
class
CicloVidaCompoComponent
implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
OnDestroy {


  //ngOnChanges() is only called when @Input()

  valorInicial: number = 5;
  deletarCiclo: boolean = false;

  constructor() {
    this.log("Construtor");
  }

  ngOnChanges() {
    this.log("onchange");
  }

  ngOnInit() {
    this.log("OnInit");
  }

  ngDoCheck() {
    this.log("DoCheck");
  }

  ngAfterContentInit() {
    this.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    this.log("ngAfterContentcheck");
  }

  ngAfterViewChecked() {
    this.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    this.log("ngOnDestroy");
  }

  mudarValor() {
    this.valorInicial++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }

  private log(msgLog) {
    console.log(msgLog);
  }
}
