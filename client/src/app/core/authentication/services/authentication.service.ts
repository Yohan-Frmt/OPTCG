import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';
import { CredentialsService } from './credentials.service';
import { Register } from '../models/register.model';
import { User } from '../../../shared/models/user.model';
import { Login } from '../models/login.model';
import { Auth } from '../models/auth.model';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { CREDENTIALS_KEY } from '../../tokens';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private readonly _api: ApiService,
    private readonly _router: Router,
    private readonly _credentials: CredentialsService,
    private readonly _jwt: JwtService,
  ) {
    const credentials = this._credentials.storage.getItem(CREDENTIALS_KEY);
    if (credentials) {
      const decoded = this._jwt.decode();
      this._userSubject = new BehaviorSubject<User | null>(decoded.user);
    } else {
      this._userSubject = new BehaviorSubject<User | null>(null);
    }
    this.user = this._userSubject.asObservable();
  }

  public currentUserValue = (): User | null => this._userSubject.value;

  public register = (data: Register): Observable<User> =>
    this._api.post<User, Register>('/auth/register', {
      ...data,
    });

  public login = (data: Login): Observable<Auth> =>
    this._api
      .post<Auth, Login>('/auth/login', {
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
        this._router.navigate(['/auth/login'], { replaceUrl: true });
      }),
    );
  };
}
