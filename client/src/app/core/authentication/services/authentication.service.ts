import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';
import { CredentialsService } from './credentials.service';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { CREDENTIALS_KEY } from '../../tokens';
import { JwtService } from './jwt.service';
import { IUser } from '../../../shared/models';
import { IAuth, ILogin, IRegister } from '../models';
import { IRefresh } from '../models/refresh.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public user: Observable<IUser | null>;
  private _userSubject: BehaviorSubject<IUser | null>;
  private refreshTokenTimeout: string | number | NodeJS.Timeout | undefined;

  constructor(
    private readonly _api: ApiService,
    private readonly _router: Router,
    private readonly _credentials: CredentialsService,
    private readonly _jwt: JwtService,
  ) {
    const credentials = this._credentials.storage.getItem(CREDENTIALS_KEY);
    if (credentials) {
      const decoded = this._jwt.decode();
      this._userSubject = new BehaviorSubject<IUser | null>(decoded.user);
    } else {
      this._userSubject = new BehaviorSubject<IUser | null>(null);
    }
    this.user = this._userSubject.asObservable();
  }

  public currentUserValue = (): IUser | null => this._userSubject.value;

  public register = (data: IRegister): Observable<IUser> =>
    this._api.post<IUser, IRegister>('/auth/register', {
      ...data,
    });

  public refresh = (): Observable<IAuth> =>
    this._api
      .post<IAuth, IRefresh>('/auth/refresh-token', {
        refresh_token: this._credentials.getRefreshToken()!,
      })
      .pipe(
        map((data) => {
          this._credentials.setCredentials(data);
          const decoded = this._jwt.decode();
          this._userSubject.next(decoded.user);
          this.startRefreshTokenTimer();
          return data;
        }),
      );

  public login = (data: ILogin): Observable<IAuth> =>
    this._api
      .post<IAuth, ILogin>('/auth/login', {
        ...data,
      })
      .pipe(
        map((data) => {
          this._credentials.setCredentials(data);
          const decoded = this._jwt.decode();
          this._userSubject.next(decoded.user);
          return data;
        }),
      );

  public logout = (): Observable<boolean> => {
    return of(true).pipe(
      tap(() => {
        this._credentials.removeItem();
        this._userSubject.next(null);
        this.stopRefreshTokenTimer();
        this._router.navigate(['/auth/login']);
      }),
    );
  };

  private startRefreshTokenTimer() {
    const jwtToken = JSON.parse(
      atob(this._credentials.getAccessToken()!.split('.')[1]),
    );
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(
      () => this.refresh().subscribe(),
      timeout,
    );
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
