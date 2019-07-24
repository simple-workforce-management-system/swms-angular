import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return true;
/*
    const hasToken = this.authService.hasValidToken();
    if (hasToken) {
      return true;
    }

    this.router.navigate(['/users/login'], {queryParams: {returnUrl: state.url}});
    return false;
*/
  }

}
