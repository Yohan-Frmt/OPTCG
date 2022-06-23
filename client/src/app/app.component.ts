import { Component } from '@angular/core';
import { AuthenticationService } from './core/authentication/services/authentication.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'app';
  public user: User | null = null;
  constructor(private readonly _authentication: AuthenticationService) {
    this._authentication.user.subscribe((x) => (this.user = x));
  }
}
