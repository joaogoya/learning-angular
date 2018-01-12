import { Observable } from 'rxjs/observable';
import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router'
import { AlunoFormComponent } from './../aluno/aluno-form/aluno-form.component';

@Injectable()
export class AlunonDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
    
    canDeactivate(
        component: AlunoFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):  Observable<boolean> | boolean  {
        console.log('DEACTIVATE');
        return false; 
    }
}
