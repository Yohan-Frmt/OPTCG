import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { CredentialsService } from "../services/credentials.service";
import { JwtService } from "../services/jwt.service";
import { AuthenticationService } from "../services/authentication.service";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private readonly _router: Router,
    private readonly _credentials: CredentialsService,
    private readonly _jwt: JwtService,
    private readonly _authentication: AuthenticationService
  ) {
  }

  public async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (this._credentials.getAccessToken()) {
      if (this._jwt.isTokenExpired()) {
        try {
          const auth = await firstValueFrom(this._authentication.refresh());
          this._credentials.setCredentials(auth);
          const decoded = this._jwt.decode();
          this._authentication.userSubject.next(decoded.user);
        } catch {
          this._router.navigate(["/auth/login"], {
            queryParams: { redirect: state.url },
            replaceUrl: true
          });
          return false;
        }
      }
      return true;
    }

    this._router.navigate(["/auth/login"], {
      queryParams: { redirect: state.url },
      replaceUrl: true
    });
    return false;
  }
}
