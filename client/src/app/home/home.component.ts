import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { IUser } from '../shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public user: IUser | null;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
  ) {
    this.user = this._authentication.currentUserValue();
  }
}
