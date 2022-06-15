import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { ApiService } from '../core/api/api.service';
import { ICard } from '../shared/models/card.model';
import { IUser } from '../shared/models/user.model';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
  public user: IUser | null;
  public cards: Observable<any>;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _api: ApiService,
  ) {
    this.user = this._authentication.currentUserValue();
    this.cards = this._api.get<ICard>('/cards');
  }
}
