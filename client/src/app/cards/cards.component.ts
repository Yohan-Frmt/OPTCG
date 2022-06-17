import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { ApiService } from '../core/api/api.service';
import { ICard } from '../shared/models/card.model';
import { IUser } from '../shared/models/user.model';
import { ICardRarity } from '../shared/models/cardrarity.model';
import { ICardSet } from '../shared/models/cardset.model';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
  public user: IUser | null;
  public cards: Observable<ICard[]>;
  public rarities: Observable<ICardRarity[]>;
  public set: Observable<ICardSet>;
  public query: any = {};

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _api: ApiService,
  ) {
    this.user = this._authentication.currentUserValue();
    this.cards = this._api.get<ICard[]>('/cards');
    this.rarities = this._api.get<ICardRarity[]>('/cardrarities');
    this.set = this._api.get<ICardSet>('/cardsets');
  }

  public onFilterSubmit = ([value, type]: [string, string]) => {
    switch (type) {
      case 'rarity':
        this.query.rarity = value;
        if (!value) delete this.query.rarity;
        break;
      case 'set':
        this.query.set = value;
        if (!value) delete this.query.set;
        break;
    }
    const query: string = new URLSearchParams(this.query).toString();
    this.cards = this._api.get<ICard[]>(`/cards?${query}`);
  };
}
