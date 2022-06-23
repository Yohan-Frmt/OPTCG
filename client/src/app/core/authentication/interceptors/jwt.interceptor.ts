import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsService } from '../services/credentials.service';
import { Config, CONFIG } from '../../tokens';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    @Inject(CONFIG) private readonly _config: Config,
    private readonly _credentials: CredentialsService,
    private readonly _jwt: JwtService,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const isApi = request.url.startsWith(this._config.api);
    if (!isApi) return next.handle(request);
    const token = this._credentials.getAccessToken();
    if (!token) throw new Error('Could not get token');
    let isExpired = token ? this._jwt.isTokenExpired(token) : true;
    if (token && isExpired) request = request.clone();
    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(request);
  }
}
