import { ChangeDetectionStrategy, Component } from '@angular/core';
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
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { CardService } from '../shared/services/card.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'deckbuilder',
  templateUrl: './deckbuilder.component.html',
  styleUrls: ['./deckbuilder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckbuilderComponent {
  public user: IUser | null;
  public cards!: Observable<ICard[]>;
  public rarities!: Observable<ICardRarity[]>;
  public sets!: Observable<ICardSet>;
  public status!: Observable<ICardStatus>;
  public types!: Observable<ICardType>;
  public tags!: Observable<ICardTag[]>;
  public colors!: Observable<ICardColor[]>;
  public inLeader: ICard[] = [];
  public inList: ICard[] = [];

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _card: CardService,
  ) {
    this.user = this._authentication.currentUserValue();
  }

  noReturnPredicate() {
    return false;
  }

  onePerSpotPredicate(drag: any, drop: any) {
    return drop.data.length < 1;
  }

  drop(event: CdkDragDrop<ICard[]>) {
    // event.item.data.inPlay = true;
    // transferArrayItem(
    //   event.previousContainer.data,
    //   event.container.data,
    //   event.previousIndex,
    //   event.currentIndex,
    // );
  }
}
