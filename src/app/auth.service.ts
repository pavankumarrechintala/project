import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _router:Router) { }

  
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const logged = localStorage.getItem('logged')
      if(logged){
        return true
      }
      this._router.navigate([''])
     return false
    }

}
