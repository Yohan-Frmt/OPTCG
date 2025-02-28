import { Injectable } from "@angular/core";
import { CardService } from "../shared/services/card.service";
import { DeckbuilderManager } from "./builder/manager.builder";
import { ApiService } from "../core/api/api.service";
import { ICard, ICardRarity, IDeck, IDeckStringContent } from "../shared/models";
import { AuthenticationService } from "../core/authentication/services/authentication.service";
import { Observable } from "rxjs";
import { DeckService } from "../shared/services/deck.service";

@Injectable({
  providedIn: "root"
})
export class DeckbuilderService {
  public cards!: Observable<ICard[]>;

  constructor(
    private readonly _api: ApiService,
    private readonly _card: CardService,
    private readonly _deck: DeckService,
    private readonly _authentication: AuthenticationService
  ) {
    this._manager = new DeckbuilderManager(0);
    this.cards = this._card.cardsQuery([["Leader", "rarities"]]);
  }

  private _manager: DeckbuilderManager;

  get manager(): DeckbuilderManager {
    return this._manager;
  }

  set manager(value: DeckbuilderManager) {
    this._manager = value;
  }

  public addCard = (card: ICard) => {
    if (card.rarities.some((rarity: ICardRarity) => rarity.abbr === "L")) {
      this.manager.setLeader(card);
      this.cards = this._card.cardsQuery([
        ["!Leader", "types"],
        [card.colors.map((color) => color.en_name).join(), "colors"]
      ]);
    } else {
      this.manager.addCard(card);
    }
    this.manager.updateChart();
  };

  public removeCard = (card: ICard) => {
    this.manager.removeCard(card);
    this.manager.updateChart();
  };

  public async import(deckCode: string) {
    const deck = await this._deck.decode(deckCode);
    this.manager.setLeader(deck.leader);
    for (const card of deck.cards)
      for (let i = card.count!; i--;)
        this.manager.addCard(card);
    this.manager.updateChart();
  }

  public create = (name: string, { cards }: IDeckStringContent, visibility: string, description: string): Observable<IDeck> => {
    const deck: IDeck = {
      name,
      author_id: this._authentication.currentUserValue()!.id,
      content: cards,
      visibility,
      description
    };
    return this._api.post<IDeck, IDeck>("/deck", deck);
  };
}
