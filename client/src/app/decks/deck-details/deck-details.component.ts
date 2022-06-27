import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { ICard, IDeck, IDeckContent, IUser } from '../../shared/models';
import { Observable } from 'rxjs';
import { DeckService } from '../../shared/services/deck.service';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'deck-preview-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss'],
})
export class DeckDetailsComponent implements OnInit {
  public user: IUser | null;
  public deck!: Observable<IDeck>;
  public deckId: string = '';
  public cards!: IDeckContent;
  public leader!: Observable<ICard>;
  public main: Observable<ICard>[] = [];

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _deck: DeckService,
    private readonly _card: CardService,
    private readonly _route: ActivatedRoute,
  ) {
    this.user = this._authentication.currentUserValue();
  }

  ngOnInit(): void {
    this.deckId = this._route.snapshot.paramMap.get('id')!;
    this.deck = this._deck.deck(this.deckId);
    this.deck.subscribe((deck) => {
      this.cards = JSON.parse(deck.content) as IDeckContent;
      this.leader = this._card.getCard(this.cards.leader);
      for (const card of this.cards.main) {
        this.main.push(this._card.getCard(card));
      }
    });
  }
}
