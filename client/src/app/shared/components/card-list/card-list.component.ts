import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ICard } from "../../models";
import { map, Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent {
  @Input() public cards!: Observable<ICard[]>;
  @Input() public fromDeckbuilder: boolean = false;
  @Input() public deckId!: string;
  @Output() public cardClicked = new EventEmitter<ICard>();
  @Output() public cardRightClicked = new EventEmitter<ICard>();
  public card!: ICard | null;

  constructor(private readonly _router: Router) {
  }

  public sortCardsByType(): void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (a.type.en_name < b.type.en_name ? -1 : 1))));
  }

  public sortCardsByEnName(): void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (a.en_name < b.en_name ? -1 : 1))));
  }

  public sortCardsByCostLife(): void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (!a.life ? 1 : !b.life || a.life > b.life ? -1 : 1))));
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (!a.cost ? 1 : !b.cost || a.cost > b.cost ? -1 : 1))));
  }

  public sortCardsByPower(): void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (!a.power ? 1 : !b.power || a.power > b.power ? -1 : 1))));
  }

  public sortCardsByCounter(): void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (!a.counter ? 1 : !b.counter || a.counter > b.counter ? -1 : 1))));
  }

  public sortCardsByRarity(): void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (a.rarities[0].abbr < b.rarities[0].abbr ? -1 : 1))));
  }

  public sortCardsBySerialNumber(): void {
    this.cards = this.cards.pipe(map(card => card.sort((a, b) => (a.serial_number < b.serial_number ? -1 : 1))));
  }

  public onCardClick(card: ICard) {
    this.cardClicked.emit(card);
    if (this.fromDeckbuilder) return;
    if (this.deckId) {
      this._router.navigate(["/decks", this.deckId]);
    } else {
      this._router.navigate(["/cards", card.serial_number]);
    }
  }

  public onCardRightClick(card: ICard) {
    this.cardRightClicked.emit(card);
    return false;
  }
}
