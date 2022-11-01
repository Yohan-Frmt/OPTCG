import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "../core/authentication/services/authentication.service";
import { ICard, ICardColor, ICardRarity, ICardSet, ICardStatus, ICardTag, ICardType, IUser } from "../shared/models";
import { AlertService } from "../shared/services/alert.service";
import { CardService } from "../shared/services/card.service";
import * as Fa from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  public costs!: Observable<string[]>;
  public powers!: Observable<string[]>;
  public showList: boolean = false;
  public isLoading: boolean = false;
  public FontAwesomeIcon = Fa;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _card: CardService
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
    this.costs = this._card.costs;
    this.powers = this._card.powers;
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

  public setShowList(option: boolean) {
    this.showList = option;
  }

  private _isCardsPreloaded = (cards: Observable<ICard[]>) =>
    this.cardsPreload ? (this.cards = this.cardsPreload) : (this.cards = cards);
}
