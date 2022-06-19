import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ICard } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { IDeckContent } from '../../models/deck-content.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckComponent implements OnInit {
  @Input()
  public cards: string = '';

  public leader: Observable<ICard> | null = null;

  constructor(private readonly _card: CardService) {}

  ngOnInit(): void {
    this.leader = this._card.getCard(
      (JSON.parse(this.cards) as IDeckContent).leader,
    );
  }
}
