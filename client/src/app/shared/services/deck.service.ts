import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { Observable } from 'rxjs';
import { IDeck, IDeckContent, IDeckVisibility } from '../models';

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
      `/decks?${new URLSearchParams(<any>query).toString()}`,
    );

  public deck = (id: string): Observable<IDeck> =>
    this._api.get<IDeck>(`/deck/${id}`);

  public encode = (content: IDeckContent): string =>
    btoa(JSON.stringify(content));

  public decode = (content: string): IDeckContent =>
    JSON.parse(atob(content)) as IDeckContent;
}
