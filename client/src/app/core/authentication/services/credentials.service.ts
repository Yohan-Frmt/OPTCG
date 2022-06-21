import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../storages/local.service';
import { SessionStorageService } from '../../storages/session.service';
import { CREDENTIALS_KEY } from '../../tokens';
import { IAuth } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private readonly _storage: Storage;

  constructor(
    private readonly _localStorage: LocalStorageService,
    private readonly _sessionStorage: SessionStorageService,
  ) {
    this._storage = this._getStorage();
    this._setSavedItem();
  }

  private _credentials: IAuth | null = null;

  get credentials(): IAuth | null {
    return this._credentials;
  }

  get storage(): Storage {
    return this._storage;
  }

  getAccessToken = (): string | undefined => this.credentials?.access_token;

  getRefreshToken = (): string | undefined => this.credentials?.refresh_token;

  removeItem(): void {
    this._sessionStorage.removeItem(CREDENTIALS_KEY);
    this._localStorage.removeItem(CREDENTIALS_KEY);
  }

  public setCredentials = (credentials?: IAuth /*, rememberMe?: boolean*/) => {
    this._credentials = credentials || null;
    if (!credentials) return;
    const storage = this._localStorage; /* rememberMe or this._sessionStorage*/
    storage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
  };

  private _getStorage = (): Storage =>
    this._sessionStorage.getItem(CREDENTIALS_KEY)
      ? this._sessionStorage
      : this._localStorage;

  private _setSavedItem = (): void => {
    const savedCredentials =
      this._sessionStorage.getItem(CREDENTIALS_KEY) ||
      this._localStorage.getItem(CREDENTIALS_KEY);
    if (!savedCredentials) return;
    this._credentials = JSON.parse(savedCredentials);
  };
}
