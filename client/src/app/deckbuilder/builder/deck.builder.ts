import { MaxCardInDeckException } from "./errors/MaxCardInDeckException.error";
import { XCopiesMaxException } from "./errors/XCopiesMaxException.error";
import { ICard, ICardColor, IDeckStringContent } from "../../shared/models";
import { TDeck } from "./encoder/types";

export class Deck {
  constructor(min: number, max: number) {
    this._cards = [];
    this._leader = null;
    this._length = 0;
    this._min = min;
    this._max = max;
  }

  private _length: number;

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }

  private _leader: ICard | null;

  get leader(): ICard | null {
    return this._leader;
  }

  set leader(value: ICard | null) {
    this._leader = value;
  }

  private _cards: ICard[];

  get cards(): ICard[] {
    return this._cards;
  }

  set cards(value: ICard[]) {
    this._cards = value;
  }

  private _min: number;

  get min(): number {
    return this._min;
  }

  set min(value: number) {
    this._min = value;
  }

  private _max: number;

  get max(): number {
    return this._max;
  }

  set max(value: number) {
    this._max = value;
  }

  public static sortCards = (deck: ICard[], primarySort: string = "cost", secondarySort: string = "en_name") =>
    deck.sort((a: any, b: any) => a[primarySort] === b[primarySort] ? a[secondarySort] > b[secondarySort] ? 1 : -1 : a[primarySort] > b[primarySort] ? 1 : -1);

  public static sortDeck = (deck: ICard[]) => deck.sort((card1, card2): number => {
    const order = ["Character", "Event", "Stage"];
    for (let index1 = 0; index1 < order.length; index1++) {
      for (let index2 = index1; index2 < order.length; index2++) {
        if (
          index1 === index2 &&
          card1.type.en_name === order[index1] &&
          card2.type.en_name === order[index2]
        ) {
          if (card1.cost! > card2.cost!) return 1;
          if (card1.cost! < card2.cost!) return -1;
          return 0;
        }
        if (
          card1.type.en_name === order[index1] &&
          card2.type.en_name === order[index2]
        ) {
          return -1;
        } else if (
          card2.type.en_name === order[index1] &&
          card1.type.en_name === order[index2]
        ) {
          return 1;
        }
      }
    }
    return 0;
  });

  public setLeader = (card: ICard): void => {
    this.leader = card;
    this._validate();
  };

  public addCardToDeck = (card: ICard): void => {
    if (this.length >= this.max) throw new MaxCardInDeckException(this.max);
    if (this.cards.find((c: ICard) => c.id === card.id))
      this.cards = this._incrementCount(card);
    else this.cards.push({ ...card, count: 1 });
    this.length++;
    Deck.sortCards(this.cards);
    this._validate();
  };

  public removeCardFromDeck = (card: ICard): void => {
    if (this.cards.find((c: ICard) => c.id === card.id)) {
      this.cards = this._decrementCount(card);
      this.cards.forEach((c: ICard) => c.count === 0 ? this._deleteCard(card) : null);
      this.length--;
      Deck.sortCards(this.cards);
    }
    this._validate();
  };

  public getNumberOfCardsByType = (type: string): number => this.cards.filter((c) => c.type.en_name === type).reduce((a, b) => a + b.count!, 0);
  public getNumberOfCardsByColor = (color: string): number => this.cards.filter((c) => c.colors.map((c) => c.en_name).includes(color)).reduce((a, b) => a + b.count!, 0);
  public getNumberOfCardsByCounter = (counter: number): number => counter == 0 ? this.cards.filter((c) => c.counter === counter || c.counter == undefined).reduce((a, b) => a + b.count!, 0) : this.cards.filter((c) => c.counter === counter).reduce((a, b) => a + b.count!, 0);
  public getNumberOfCardsByAttributes = (attribute: string): number => this.cards.filter((c) => c.attribute && c.attribute.en_name === attribute).reduce((a, b) => a + b.count!, 0);
  public getNumberOfCardsByCosts = (cost: number): number => this.cards.filter((c) => c.cost === cost).reduce((a, b) => a + b.count!, 0);
  public getNumberOfCardsByRarity = (rarity: string): number => this.cards.filter((c) => c.rarities.map((c) => c.abbr).includes(rarity)).reduce((a, b) => a + b.count!, 0);
  public getNumberOfCardsByPowers = (power: number): number => this.cards.filter((c) => c.power === power).reduce((a, b) => a + b.count!, 0);

  public removeAllCardsFromDeck = (): void => {
    this.cards.length = 0;
    this.length = 0;
    this.leader = null;
  };

  public isEmpty = (): boolean => this.cards.length === 0;

  public isBanned = (card: ICard): boolean => card.status.en_name === "Banned";

  public parse = (): IDeckStringContent => {
    let cards: TDeck = [];
    for (const card of this.cards) {
      cards.push({ code: card.serial_number, count: card.count || 0 });
    }
    cards.push({ code: this.leader!.serial_number, count: 99 });
    return { cards };
  };

  private _incrementCount = (card: ICard) =>
    this.cards.map((c: ICard) => {
      if (c.id !== card.id) return c;
      if (c.count! >= c.status.max_amount)
        throw new XCopiesMaxException(card.en_name, card.status.max_amount);
      return { ...card, count: c.count! + 1 };
    });

  private _decrementCount = (card: ICard) =>
    this.cards.map((c: ICard) => {
      if (c.id !== card.id) return c;
      return { ...card, count: c.count! - 1 };
    });

  private _deleteCard = (card: ICard) => {
    const idx = this.cards.findIndex((c: ICard) => c.id === card.id);
    this.cards.splice(idx, 1);
    document.getElementById(card.id)!.remove();
  };

  private _validate = () => {
    const deckColors: string[] = [];
    for (const color of this.leader!.colors) deckColors.push(color.en_name);
    for (const card of this.cards) {
      if (!card.colors.some((color: ICardColor) => deckColors.includes(color.en_name))) {
        document.getElementById(card.en_name)!.style.filter = "grayscale()";
        // throw new DeckColorException(deckColors);
      }
    }
  };
}
