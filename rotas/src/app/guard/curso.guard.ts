import { CanActivateChild } from "@angular/router/src/interfaces";
import {ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/observable';
import { Injectable } from "@angular/core";


@Injectable()
export class CursosGuard implements CanActivateChild {
    canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('guarda curso');
        return true; 
    }
}