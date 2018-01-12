
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { EventEmitter } from '@angular/core';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  fazerLogin( user:Usuario ){
    if(user.nome == 'joao' && user.senha == 123){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmmiter.emit(true);
      this.router.navigate(['/']);
    }
    else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmmiter.emit(false);
    }
  }

  usuarioLogado(){
    return this.usuarioAutenticado;
  }
}
