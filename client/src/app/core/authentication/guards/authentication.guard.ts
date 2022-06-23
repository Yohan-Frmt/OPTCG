import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CredentialsService } from '../services/credentials.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private readonly _router: Router,
    private readonly _credentials: CredentialsService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (this._credentials.getAccessToken()) return true;
    this._router.navigate(['/auth/login'], {
      queryParams: { redirect: state.url },
      replaceUrl: true,
    });
    return false;
  }
}
