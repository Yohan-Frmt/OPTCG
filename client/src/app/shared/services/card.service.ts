import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import {
  ICard,
  ICardAttribute,
  ICardColor,
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

  public get attribute(): Observable<ICardAttribute> {
    return this._api.get<ICardAttribute>('/cardattribute');
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

  public get costs(): Observable<string[]> {
    return this._api.get<string[]>('/cardcosts');
  }
  public get powers(): Observable<string[]> {
    return this._api.get<string[]>('/cardpowers');
  }
  public getCard = (serial: string): Observable<ICard> =>
    this._api.get<ICard>('/card/' + serial);

  public cardsQuery = (queries: [string, string][]): Observable<ICard[]> => {
    let query: any = {};
    for (const [value, type] of queries) {
      switch (type) {
        case 'rarities':
          query.rarities = value;
          if (!value) delete query.rarities;
          break;
        case 'sets':
          query.sets = value;
          if (!value) delete query.set;
          break;
        case 'status':
          query.status = value;
          if (!value) delete query.status;
          break;
        case 'attribute':
          query.attribute = value;
          if (!value) delete query.attribute;
          break;
        case 'types':
          query.types = value;
          if (!value) delete query.type;
          break;
        case 'tags':
          query.tags = value;
          break;
        case 'colors':
          query.colors = value;
          break;
        case 'costs':
          query.costs = value;
          break;
        case 'powers':
          query.powers = value;
          break;
        case 'search':
          query.search = value;
          if (!value) delete query.search;
          break;
      }
    }

    return this._api.get<ICard[]>(
      `/cards?${new URLSearchParams(<any>query).toString()}`,
    );
  };
}
