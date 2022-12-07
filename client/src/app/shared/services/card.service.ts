import { Injectable } from "@angular/core";
import { ApiService } from "../../core/api/api.service";
import {
  ICard,
  ICardAttribute,
  ICardColor,
  ICardRarity,
  ICardSet,
  ICardStatus,
  ICardTag,
  ICardType,
  IPagination,
  Order
} from "../models";
import { Observable } from "rxjs";
import { TCardCodeAndCount } from "../../deckbuilder/builder/encoder/types";

@Injectable({
  providedIn: "root"
})
export class CardService {
  constructor(private readonly _api: ApiService) {
  }

  public get cards(): Observable<IPagination<ICard>> {
    return this._api.get<IPagination<ICard>>("/cards");
  }

  public get rarities(): Observable<ICardRarity[]> {
    return this._api.get<ICardRarity[]>("/cardrarities");
  }

  public get sets(): Observable<ICardSet> {
    return this._api.get<ICardSet>("/cardsets");
  }

  public get status(): Observable<ICardStatus> {
    return this._api.get<ICardStatus>("/cardstatus");
  }

  public get attribute(): Observable<ICardAttribute> {
    return this._api.get<ICardAttribute>("/cardattribute");
  }

  public get types(): Observable<ICardType> {
    return this._api.get<ICardType>("/cardtypes");
  }

  public get tags(): Observable<ICardTag[]> {
    return this._api.get<ICardTag[]>("/cardtags");
  }

  public get colors(): Observable<ICardColor[]> {
    return this._api.get<ICardColor[]>("/cardcolors");
  }

  public get costs(): Observable<string[]> {
    return this._api.get<string[]>("/cardcosts");
  }

  public get powers(): Observable<string[]> {
    return this._api.get<string[]>("/cardpowers");
  }

  public getAssociatedCard = (serial: string): Observable<TCardCodeAndCount[]> => this._api.post<TCardCodeAndCount[], {}>(`/card/${serial}`, {});

  public getCard = (serial: string): Observable<ICard> =>
    this._api.get<ICard>("/card/" + serial);

  public cardsQuery = (queries?: [string, string][], page: number = 1, take: number = 20, order: Order = Order.ASC): Observable<IPagination<ICard>> => {
    let query: any = {};
    query.page = page;
    query.take = take;
    query.order = order;
    if (queries) {
      for (const [value, type] of queries) {
        switch (type) {
          case "rarities":
            query.rarities = value;
            if (!value) delete query.rarities;
            break;
          case "sets":
            query.sets = value;
            if (!value) delete query.set;
            break;
          case "status":
            query.status = value;
            if (!value) delete query.status;
            break;
          case "attribute":
            query.attribute = value;
            if (!value) delete query.attribute;
            break;
          case "types":
            query.types = value;
            if (!value) delete query.type;
            break;
          case "tags":
            query.tags = value;
            break;
          case "colors":
            query.colors = value;
            break;
          case "costs":
            query.costs = value;
            break;
          case "powers":
            query.powers = value;
            break;
          case "search":
            query.search = value;
            if (!value) delete query.search;
            break;
        }
      }
    }

    return this._api.get<IPagination<ICard>>(
      `/cards?${new URLSearchParams(<any>query).toString()}`
    );
  };
}
