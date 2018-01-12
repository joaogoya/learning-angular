import { CanActivateChild } from "@angular/router/src/interfaces";
import {ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/observable';
import { Injectable } from "@angular/core";


@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        /*if(state.url.includes('edit') ){
            return false
        }*/
        console.log('alunos filha');
        return true; 
    }
}