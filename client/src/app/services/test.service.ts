import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITest {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private readonly http: HttpClient) {}

  public getTest = (): Observable<ITest> => this.http.get<ITest>('api');
}
