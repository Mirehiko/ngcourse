import { inject, Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";


@Injectable()
export class AdminGuard implements CanActivate {
  private router = inject(Router);
  private authService = inject(AuthService);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.activeUser;
    if (currentUser) {
      return true;
    }

    return this.router.createUrlTree(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
  }
}
