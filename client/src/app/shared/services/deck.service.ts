import { Injectable } from "@angular/core";
import { ApiService } from "../../core/api/api.service";
import { firstValueFrom, Observable } from "rxjs";
import { ICard, IDeck, IDeckVisibility } from "../models";
import { getDeckFromCode } from "../../deckbuilder/builder/encoder/deck-encoder";
import { CardService } from "./card.service";
import { Deck } from "../../deckbuilder/builder/deck.builder";
import { IDeckContent } from "../models/deck/deck-content.model";

interface IDeckQuery {
}

@Injectable({
  providedIn: "root"
})
export class DeckService {
  constructor(
    private readonly _api: ApiService,
    private readonly _card: CardService
  ) {
  }

  public get decks(): Observable<IDeck[]> {
    return this._api.get<IDeck[]>("/decks");
  }

  public get visibilities(): Observable<IDeckVisibility[]> {
    return this._api.get<IDeckVisibility[]>("/deckvisibilities");
  }

  public decksQuery = (query: IDeckQuery): Observable<IDeck[]> =>
    this._api.get<IDeck[]>(
      `/decks?${new URLSearchParams(query as any).toString()}`
    );

  public deck = (id: string): Observable<IDeck> =>
    this._api.get<IDeck>(`/deck/${id}`);

  public getLeader = async (deck: IDeck): Promise<ICard> => {
    const { leader } = await this.decode(deck.content);
    return leader;
  };
  public getCards = async (deck: IDeck): Promise<ICard[]> => {
    const { cards } = await this.decode(deck.content);
    return cards;
  };

  public getDeck = async (deck: IDeck): Promise<IDeckContent> =>
    await this.decode(deck.content);

  public decode = async (content: string): Promise<IDeckContent> => {
    const cards: ICard[] = [];
    for (const cardCodeAndCount of getDeckFromCode(content)) {
      const card = await firstValueFrom(
        this._card.getCard(cardCodeAndCount.code)
      );
      cards.push({ ...card, count: cardCodeAndCount.count });
    }
    const leader = cards.pop()!;
    return {
      leader,
      cards: Deck.sortDeck(cards)
    };
  };
}
