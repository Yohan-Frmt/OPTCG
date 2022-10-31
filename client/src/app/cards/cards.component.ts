import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { last, map, Observable, Subscriber } from 'rxjs';
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
export class CardsComponent implements OnInit, OnChanges {
  @Input() public fromDeckbuilder: boolean = false;
  @Input() public cardsPreload!: Observable<ICard[]>;
  @Output() public cardClicked = new EventEmitter<ICard>();
  @Output() public cardRightClicked = new EventEmitter<ICard>();
  public user: IUser | null;
  public query: any = [];
  public cards!: Observable<ICard[]>;
  public rarities!: Observable<ICardRarity[]>;
  public sets!: Observable<ICardSet>;
  public status!: Observable<ICardStatus>;
  public types!: Observable<ICardType>;
  public tags!: Observable<ICardTag[]>;
  public colors!: Observable<ICardColor[]>;
  public showList: boolean = false;
  public isLoading: boolean = false;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _card: CardService,
  ) {
    this.user = this._authentication.currentUserValue();
  }

  ngOnChanges(changes: any): void {
    if (changes.cardsPreload) this.cards = changes.cardsPreload.currentValue;
  }

  ngOnInit(): void {
    this._isCardsPreloaded(this._card.cards);
    this.rarities = this._card.rarities;
    this.sets = this._card.sets;
    this.status = this._card.status;
    this.types = this._card.types;
    this.tags = this._card.tags;
    this.colors = this._card.colors;
  }

  public onSubmit = ([value, type]: [string, string]) => {
    this.query.push([value, type]);
    this.cards = this._card.cardsQuery(this.query);
  };

  public onCardClick(card: ICard) {
    this.cardClicked.emit(card);
  }

  public onCardRightClick(card: ICard) {
    this.cardRightClicked.emit(card);
    return false;
  }

  private _isCardsPreloaded = (cards: Observable<ICard[]>) =>
    this.cardsPreload ? (this.cards = this.cardsPreload) : (this.cards = cards);

  public setShowList(option: boolean) {
    this.showList = option;
  }

  public sortCardsByType() : void {
    this.cards = this.cards.pipe( map(card => card.sort((a, b) => (a.type.en_name < b.type.en_name ? -1 : 1))));
  }

  public sortCardsByEnName() : void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (a.en_name < b.en_name ? -1 : 1))));
  }

  public sortCardsByCostLife() : void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (!a.life ? 1 : !b.life|| a.life > b.life ? -1 : 1))));
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (!a.cost ? 1 : !b.cost|| a.cost > b.cost ? -1 : 1))));
  }

  public sortCardsByPower() : void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (!a.power ? 1 : !b.power|| a.power > b.power ? -1 : 1))));
  }

  public sortCardsByCounter() : void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (!a.counter ? 1 : !b.counter|| a.counter > b.counter ? -1 : 1))));
  }

  public sortCardsByRarity() : void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (a.rarities[0].abbr < b.rarities[0].abbr ? -1 : 1))));
  }

  public sortCardsBySerialNumber() : void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (a.serial_number < b.serial_number ? -1 : 1))));
  }
}
