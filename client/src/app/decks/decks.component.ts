import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IDeck, IDeckVisibility, IUser } from '../shared/models';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { Observable } from 'rxjs';
import { DeckService } from '../shared/services/deck.service';

@Component({
  selector: 'decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecksComponent implements OnInit {
  public user: IUser | null;
  public decks!: Observable<IDeck[]>;
  public visibilities!: Observable<IDeckVisibility[]>;

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
