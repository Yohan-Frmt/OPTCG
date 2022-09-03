import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CredentialsService } from '../services/credentials.service';
import { JwtService } from '../services/jwt.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private readonly _router: Router,
    private readonly _credentials: CredentialsService,
    private readonly _jwt: JwtService,
    private readonly _authentication: AuthenticationService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (this._credentials.getAccessToken()) {
      if (this._jwt.isTokenExpired()) {
        this._authentication.refresh();
      } else {
        return true;
      }
    }

    this._router.navigate(['/auth/login'], {
      queryParams: { redirect: state.url },
      replaceUrl: true,
    });
    return false;
  }
}
