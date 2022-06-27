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
  selector: 'deck-preview',
  templateUrl: './deck-preview.component.html',
  styleUrls: ['./deck-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckPreviewComponent implements OnInit {
  @Input() public deck!: IDeck;
  public name!: string;
  public cards!: IDeckContent;
  public leader!: Observable<ICard>;

  constructor(private readonly _card: CardService) {}

  ngOnInit(): void {
    this.cards = JSON.parse(this.deck.content) as IDeckContent;
    this.leader = this._card.getCard(this.cards.leader);
  }
}
