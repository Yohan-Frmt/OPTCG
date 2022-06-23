import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import {
  ICard,
  ICardColor,
  ICardQuery,
  ICardRarity,
  ICardSet,
  ICardStatus,
  ICardTag,
  ICardType,
} from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private readonly _api: ApiService) {}

  public get cards(): Observable<ICard[]> {
    return this._api.get<ICard[]>('/cards');
  }

  public get rarities(): Observable<ICardRarity[]> {
    return this._api.get<ICardRarity[]>('/cardrarities');
  }

  public get sets(): Observable<ICardSet> {
    return this._api.get<ICardSet>('/cardsets');
  }

  public get status(): Observable<ICardStatus> {
    return this._api.get<ICardStatus>('/cardstatus');
  }

  public get types(): Observable<ICardType> {
    return this._api.get<ICardType>('/cardtypes');
  }

  public get tags(): Observable<ICardTag[]> {
    return this._api.get<ICardTag[]>('/cardtags');
  }

  public get colors(): Observable<ICardColor[]> {
    return this._api.get<ICardColor[]>('/cardcolors');
  }

  public getCard = (serial: string): Observable<ICard> =>
    this._api.get<ICard>('/card/' + serial);

  public cardsQuery = (query: ICardQuery): Observable<ICard[]> =>
    this._api.get<ICard[]>(
      `/cards?${new URLSearchParams(<any>query).toString()}`,
    );
}
