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
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

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
    this._initCards();
  }

  noReturnPredicate() {
    return false;
  }

  onePerSpotPredicate(drag: any, drop: any) {
    return drop.data.length < 1;
  }

  drop(event: CdkDragDrop<ICard[]>) {
    this.onExited(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this._initCards();
  }

  public onClick = (event: any) => {
    console.log(event);
  };
  public onRightclick = () => {};

  public onEntered = (event: any) => {
    const cardList = document.querySelectorAll('.card-list')[0];
    const clone = event.item.element.nativeElement.cloneNode(true);
    clone.removeAttribute('style');
    cardList.prepend(clone);
    console.log(event);
  };

  public onExited = (event: any) => {
    const clones = document.querySelectorAll('.cdk-drag-dragging');
    for (let i = 0; i < clones.length - 1; ++i) clones[i].remove();
    console.log(event);
  };

  private _initCards = () => {
    this._card.cards.subscribe((cards) => {
      this.inList = cards;
      console.log(this.inList);
    });
  };
}
