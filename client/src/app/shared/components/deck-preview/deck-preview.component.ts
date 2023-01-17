import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICard, IDeck } from '../../models';
import { CardService } from '../../services/card.service';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'deck-preview',
  templateUrl: './deck-preview.component.html',
  styleUrls: ['./deck-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckPreviewComponent implements OnInit {
  @Input() public deck!: IDeck;
  public name!: string;
  public leader!: Promise<ICard>;

  constructor(
    private readonly _card: CardService,
    private readonly _deck: DeckService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.leader = this._deck.getLeader(this.deck);
  }

  public view = (id: string | undefined): void => {
    this._router.navigate(["/decks", id!]);
  };

  public edit = (id: string | undefined): void => {
    this._router.navigate(["deckbuilder", id!]);
  };
}
