import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.auth.UserInfo
    if (currentUser == null) {
      this.auth.Logout();
      this.router.navigate(['/'])
      return false;
    }
    if (currentUser) {
      if (this.auth.UserInfo != '') {
        return true;
      } else {
        // this.auth.Logout();
        this.router.navigate(['/'])
        return false;
      }
    }
    this.router.navigate(['/'])
    return false;
  }




}
