import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert, AlertType } from '../models/alert.model';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private _subject = new Subject<Alert>();
  private _id = 'default';

  public alert = (alert: Alert): void => {
    alert.id ||= this._id;
    this._subject.next(alert);
  };

  public clear = (id: string = this._id): void => {
    this._subject.next(new Alert({ id }));
  };

  public onAlert = (id = this._id): Observable<Alert> =>
    this._subject.asObservable().pipe(filter((x) => x && x.id === id));

  public success = (message: string, options?: any) => {
    this.alert(new Alert({ type: AlertType.Success, message, ...options }));
  };

  public error = (message: string, options?: any) => {
    this.alert(new Alert({ type: AlertType.Error, message, ...options }));
  };

  public warn = (message: string, options?: any) => {
    this.alert(new Alert({ type: AlertType.Warning, message, ...options }));
  };

  public info = (message: string, options?: any) => {
    this.alert(new Alert({ type: AlertType.Info, message, ...options }));
  };
}
