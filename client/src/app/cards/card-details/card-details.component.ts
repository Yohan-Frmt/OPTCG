import { Component } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/services/authentication.service';
import { AlertService } from '../../shared/services/alert.service';
import { ApiService } from '../../core/api/api.service';
import { IUser } from '../../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { ICard } from '../../shared/models/card.model';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent {
  public user: IUser | null;
  public card: ICard | null = null;
  public serialNumber: string | null;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _api: ApiService,
    private readonly _route: ActivatedRoute,
  ) {
    this.user = this._authentication.currentUserValue();
    this.serialNumber = this._route.snapshot.paramMap.get('serial');
    this._api
      .get<ICard>(`/card/${this.serialNumber}`)
      .subscribe((card) => (this.card = card));
  }
}
