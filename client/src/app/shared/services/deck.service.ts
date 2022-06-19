import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { Observable } from 'rxjs';
import { IDeck } from '../models/deck.model';
import { IDeckVisibility } from '../models/deck-visibility.model';

interface IDeckQuery {}

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(private readonly _api: ApiService) {}

  public get decks(): Observable<IDeck[]> {
    return this._api.get<IDeck[]>('/decks');
  }

  public get visibilities(): Observable<IDeckVisibility[]> {
    return this._api.get<IDeckVisibility[]>('/deckvisibilities');
  }

  public decksQuery = (query: IDeckQuery): Observable<IDeck[]> =>
    this._api.get<IDeck[]>(
      `/cards?${new URLSearchParams(<any>query).toString()}`,
    );
}
