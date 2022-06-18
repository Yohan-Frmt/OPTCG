import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { ApiService } from '../core/api/api.service';
import { ICard } from '../shared/models/card.model';
import { IUser } from '../shared/models/user.model';
import { ICardRarity } from '../shared/models/cardrarity.model';
import { ICardSet } from '../shared/models/cardset.model';
import { ICardStatus } from '../shared/models/cardstatus.model';
import { ICardType } from '../shared/models/cardtype.model';
import { ICardTag } from '../shared/models/cardtag.model';
import { ICardColor } from '../shared/models/cardcolor.model';

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
  public status: Observable<ICardStatus>;
  public type: Observable<ICardType>;
  public tags: Observable<ICardTag[]>;
  public colors: Observable<ICardColor[]>;
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
    this.status = this._api.get<ICardStatus>('/cardstatus');
    this.type = this._api.get<ICardType>('/cardtypes');
    this.tags = this._api.get<ICardTag[]>('/cardtags');
    this.colors = this._api.get<ICardColor[]>('/cardcolors');
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
      case 'status':
        this.query.status = value;
        if (!value) delete this.query.status;
        break;
      case 'type':
        this.query.type = value;
        if (!value) delete this.query.type;
        break;
      case 'tags':
        this.query.tags = value;
        break;
      case 'colors':
        this.query.colors = value;
        break;
    }
    const query: string = new URLSearchParams(this.query).toString();
    this.cards = this._api.get<ICard[]>(`/cards?${query}`);
  };
}
