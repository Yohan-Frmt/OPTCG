import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DeckbuilderService } from './deckbuilder.service';
import { AlertService } from '../shared/services/alert.service';
import { ICard, ICardRarity, IUser } from '../shared/models';
import { CardService } from '../shared/services/card.service';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { DeckbuilderManager } from '../shared/models/deckbuilder/manager.builder';
import { Observable } from 'rxjs';

@Component({
  selector: 'deckbuilder',
  templateUrl: './deckbuilder.component.html',
  styleUrls: ['./deckbuilder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckbuilderComponent implements OnInit {
  public user: IUser | null;
  public manager: DeckbuilderManager;
  public cards!: Observable<ICard[]>;
  public step!: string | void;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _card: CardService,
    private readonly _deckbuilder: DeckbuilderService,
  ) {
    this.user = this._authentication.currentUserValue();
    this.manager = this._deckbuilder.manager;
    this.cards = this._card.cardsQuery([['Leader', 'rarities']]);
  }

  ngOnInit(): void {
    this.manager.initChart(document.getElementById('cardTypes') as HTMLCanvasElement);
    this.manager.initChart(document.getElementById('cardColors') as HTMLCanvasElement);
    this.manager.initChart(document.getElementById('cardCounters') as HTMLCanvasElement);
  }

  public onClick = (card: ICard) => {
    if (card.rarities.some((rarity: ICardRarity) => rarity.abbr === 'L')) {
      this.manager.setLeader(card);
      this.cards = this._card.cardsQuery([
        ['!LEADER', 'types'],
        [card.colors.map((c) => c.en_name).join(), 'colors'],
      ]);
    } else {
      this.manager.addCard(card);
    }
    this.manager.updateChart();
  };

  public onRightClick = (card: ICard) => {
    this.manager.removeCard(card);
    this.manager.updateChart();
    return false;
  };

  public onSubmit = () => {
    console.log(this.manager.deck.parse());
    this._deckbuilder.create(this.manager.deck.parse()).subscribe({
      next: (deck) => {
        console.log(deck);
        this._alert.success(deck.name + ' created');
      },
      error: (error) => {
        this._alert.error(error);
      },
    });
  };
}
