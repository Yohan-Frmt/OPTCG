import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthenticationService } from '../core/authentication/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public user: User;
  constructor(private readonly _authenticate: AuthenticationService) {
    this.user = this._authenticate.currentUserValue()!;
  }
}
