import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private athServ:AuthService, private router: Router ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):Observable<boolean> | boolean{
    if(this.athServ.usuarioLogado()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
