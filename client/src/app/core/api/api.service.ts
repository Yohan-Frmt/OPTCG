import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config, CONFIG } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    @Inject(CONFIG) private readonly _config: Config,
    private readonly _http: HttpClient,
  ) {}

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return new HttpHeaders(headersConfig);
  }

  public get = <T>(
    url: string,
    params: HttpParams = new HttpParams(),
  ): Observable<T> =>
    this._http.get<T>(`${this._config.api}${url}`, {
      headers: this.headers,
      params,
    });

  public post = <T, D>(url: string, data: D): Observable<T> =>
    this._http.post<T>(`${this._config.api}${url}`, data, {
      headers: this.headers,
    });

  public put = <T, D>(url: string, data: D): Observable<T> =>
    this._http.put<T>(`${this._config.api}${url}`, data, {
      headers: this.headers,
    });

  public delete = <T>(url: string): Observable<T> =>
    this._http.delete<T>(`${this._config.api}${url}`, {
      headers: this.headers,
    });
}
