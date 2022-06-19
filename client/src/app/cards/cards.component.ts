import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { ICard } from '../shared/models/card.model';
import { IUser } from '../shared/models/user.model';
import { ICardRarity } from '../shared/models/cardrarity.model';
import { ICardSet } from '../shared/models/cardset.model';
import { ICardStatus } from '../shared/models/cardstatus.model';
import { ICardType } from '../shared/models/cardtype.model';
import { ICardTag } from '../shared/models/cardtag.model';
import { ICardColor } from '../shared/models/cardcolor.model';
import { CardService } from '../shared/services/card.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  public user: IUser | null;
  public cards: Observable<ICard[]> | null = null;
  public rarities: Observable<ICardRarity[]> | null = null;
  public sets: Observable<ICardSet> | null = null;
  public status: Observable<ICardStatus> | null = null;
  public types: Observable<ICardType> | null = null;
  public tags: Observable<ICardTag[]> | null = null;
  public colors: Observable<ICardColor[]> | null = null;
  public query: any = {};

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _card: CardService,
  ) {
    this.user = this._authentication.currentUserValue();
  }

  ngOnInit(): void {
    this.cards = this._card.cards;
    this.rarities = this._card.rarities;
    this.sets = this._card.sets;
    this.status = this._card.status;
    this.types = this._card.types;
    this.tags = this._card.tags;
    this.colors = this._card.colors;
  }

  public onSearchSubmit = (value: string) => {
    this.query.search = value;
    if (!value) delete this.query.search;
    this.cards = this._card.cardsQuery(this.query);
  };

  public onFilterSubmit = ([value, type]: [string, string]) => {
    switch (type) {
      case 'rarities':
        this.query.rarities = value;
        if (!value) delete this.query.rarities;
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
    this.cards = this._card.cardsQuery(this.query);
  };
}
