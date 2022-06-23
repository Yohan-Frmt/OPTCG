import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import {
  ICard,
  ICardColor,
  ICardRarity,
  ICardSet,
  ICardStatus,
  ICardTag,
  ICardType,
  IUser,
} from '../shared/models';
import { AlertService } from '../shared/services/alert.service';
import { CardService } from '../shared/services/card.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  public user: IUser | null;
  public cards!: Observable<ICard[]>;
  public rarities!: Observable<ICardRarity[]>;
  public sets!: Observable<ICardSet>;
  public status!: Observable<ICardStatus>;
  public types!: Observable<ICardType>;
  public tags!: Observable<ICardTag[]>;
  public colors!: Observable<ICardColor[]>;
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
      case 'sets':
        this.query.sets = value;
        if (!value) delete this.query.set;
        break;
      case 'status':
        this.query.status = value;
        if (!value) delete this.query.status;
        break;
      case 'types':
        this.query.types = value;
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
