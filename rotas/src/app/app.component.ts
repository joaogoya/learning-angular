import { Component, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  public mostrarMenu = false;
  
  constructor(private authServ: AuthService){
    this.authServ.mostrarMenuEmmiter.subscribe(
      mostrar => this.mostrarMenu = mostrar,
    );
  }

  ngOninit(){}

}
