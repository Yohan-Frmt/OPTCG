import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { ICard, IUser } from '../../shared/models';
import { CardService } from '../../shared/services/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent {
  public user: IUser | null;
  public card!: Observable<ICard>;
  public serialNumber: string = '';

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _card: CardService,
    private readonly _route: ActivatedRoute,
  ) {
    this.user = this._authentication.currentUserValue();
    this.serialNumber = this._route.snapshot.paramMap.get('serial')!;
    this.card = this._card.getCard(this.serialNumber);
  }
}
