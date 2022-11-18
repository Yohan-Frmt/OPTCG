import { Injectable } from "@angular/core";
import { CardService } from "../shared/services/card.service";
import { DeckbuilderManager } from "../shared/models/deckbuilder/manager.builder";
import { ApiService } from "../core/api/api.service";
import { IDeck, IDeckStringContent } from "../shared/models";
import { AuthenticationService } from "../core/authentication/services/authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DeckbuilderService {
  constructor(
    private readonly _api: ApiService,
    private readonly _card: CardService,
    private readonly _authentication: AuthenticationService
  ) {
    this._manager = new DeckbuilderManager(0);
  }

  private _manager: DeckbuilderManager;

  get manager(): DeckbuilderManager {
    return this._manager;
  }

  set manager(value: DeckbuilderManager) {
    this._manager = value;
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

  // public checkDeck = () => {
  //   let query = {} as any;
  //   let c: string[] = [];
  //   for (const color of this.deck.leader!.colors) c.push(color.en_name);
  //   if (JSON.stringify(this._colors) === JSON.stringify(c)) return;
  //   query['_colors'] = c.join();
  //   this._cards = this._card.cardsQuery([c.join(), 'colors']);
  //   this._colors = c;
  //   this.deck.main = this.deck.main.filter(
  //     (card) => !card.colors.some((r) => !c.includes(r.en_name)),
  //   );
  // };
}
