import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';
import { CredentialsService } from './credentials.service';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { CREDENTIALS_KEY } from '../../tokens';
import { JwtService } from './jwt.service';
import { IUser } from '../../../shared/models';
import { IAuth, ILogin, IRegister } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public user: Observable<IUser | null>;
  private _userSubject: BehaviorSubject<IUser | null>;

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
        this._router.navigate(['/auth/login']);
      }),
    );
  };
}
