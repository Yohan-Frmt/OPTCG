import { Component } from '@angular/core';
import { AuthenticationService } from './core/authentication/services/authentication.service';
import { IUser } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'app';
  public user: IUser | null = null;

  constructor(private readonly _authentication: AuthenticationService) {
    this._authentication.user.subscribe((x) => (this.user = x));
  }
}
