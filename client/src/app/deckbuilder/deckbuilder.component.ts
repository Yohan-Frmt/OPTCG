import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICard, IUser } from '../shared/models';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { CardService } from '../shared/services/card.service';

@Component({
  selector: 'deckbuilder',
  templateUrl: './deckbuilder.component.html',
  styleUrls: ['./deckbuilder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckbuilderComponent {
  public user: IUser | null;
  public cards!: Observable<ICard[]>;
  public inLeader: ICard[] = [];
  public inDeck: ICard[] = [];

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _card: CardService,
  ) {
    this.user = this._authentication.currentUserValue();
    this.cards = this._card.cards;
  }

  public onClick = (card: any) => {
    console.log(card as ICard);
  };

  public onSubmit = () => {
    console.log(this.inDeck);
  };
}
