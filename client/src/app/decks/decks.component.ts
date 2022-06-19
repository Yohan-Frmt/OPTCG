import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUser } from '../shared/models/user.model';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { Observable } from 'rxjs';
import { IDeck } from '../shared/models/deck.model';
import { DeckService } from '../shared/services/deck.service';
import { IDeckVisibility } from '../shared/models/deck-visibility.model';

@Component({
  selector: 'decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecksComponent implements OnInit {
  public user: IUser | null;
  public decks: Observable<IDeck[]> | null = null;
  public visibilities: Observable<IDeckVisibility[]> | null = null;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _deck: DeckService,
  ) {
    this.user = this._authentication.currentUserValue();
  }

  ngOnInit(): void {
    this.decks = this._deck.decks;
    this.visibilities = this._deck.visibilities;
  }
}
