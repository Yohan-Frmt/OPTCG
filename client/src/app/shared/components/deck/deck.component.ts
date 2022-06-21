import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ICard, IDeck, IDeckContent } from '../../models';
import { CardService } from '../../services/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckComponent implements OnInit {
  @Input()
  public deck: IDeck | null = null;
  public name!: string;
  public cards!: IDeckContent;
  public leader!: Observable<ICard>;

  constructor(private readonly _card: CardService) {}

  ngOnInit(): void {
    if (!this.deck) return;
    this.cards = <IDeckContent>JSON.parse(this.deck?.content);
    this.leader = this._card.getCard(this.cards.leader);
  }
}
