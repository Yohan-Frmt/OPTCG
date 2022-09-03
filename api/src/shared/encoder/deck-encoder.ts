import { TDeck, TSets } from './types';
import { encode } from './base32';
import VarInt from './varint';

class DeckEncoder {
  private static readonly _series_to_int: Record<TSets | string, number> = {
    P: 0,
    ST01: 1,
    ST02: 2,
    ST03: 3,
    ST04: 4,
    OP01: 5,
  };

  public static getCodeFromDeck = (deck: TDeck) =>
    encode(this.getCodeBytes(deck));

  static GetGroupedOfs = (deck: TDeck): TDeck[] => {
    const result: TDeck[] = [];
    while (deck.length > 0) {
      const current: TDeck = [];
      current.push(deck[0]);
      deck.shift();
      for (let i = deck.length - 1; i >= 0; i--) {
        if (
          deck[i].code.split('-')[0] === DeckEncoder.ParseCode(deck[0].code).set
        ) {
          current.push(deck[i]);
          deck.splice(i, 1);
        }
      }
      result.push(current);
    }
    return result;
  };

  static ParseCode = (card: string) => {
    return {
      set: card.split('-')[0],
      number: Number(card.split('-')[1]),
    };
  };

  static EncodeGroupOf(group: TDeck[]): Uint8Array {
    let bytes: Uint8Array = new Uint8Array([]);
    bytes = this._mergeUint8Arrays(bytes, VarInt.Get(group.length));
    for (const current of group) {
      bytes = this._mergeUint8Arrays(bytes, VarInt.Get(current.length));
      bytes = this._mergeUint8Arrays(
        bytes,
        VarInt.Get(this._series_to_int[this.ParseCode(current[0].code).set]),
      );
      for (const card of current) {
        bytes = this._mergeUint8Arrays(
          bytes,
          VarInt.Get(Number(card.code.split('-')[1])),
        );
      }
    }
    return bytes;
  }

  static EncodeNOfs(deck: TDeck) {
    let bytes: Uint8Array = new Uint8Array([]);
    for (const cardCodeAndCount of deck) {
      bytes = this._mergeUint8Arrays(bytes, VarInt.Get(cardCodeAndCount.count));
      const { set, number } = this.ParseCode(cardCodeAndCount.code);
      const setNumber = this._series_to_int[set];
      bytes = this._mergeUint8Arrays(bytes, VarInt.Get(setNumber));
      bytes = this._mergeUint8Arrays(bytes, VarInt.Get(number));
    }
    return bytes;
  }

  private static getCodeBytes = (deck: TDeck): Uint8Array => {
    if (!DeckEncoder._isValidDeck(deck)) throw new Error('Invalid deck');
    let result = new Uint8Array([]);
    const of4: TDeck = [];
    const of3: TDeck = [];
    const of2: TDeck = [];
    const of1: TDeck = [];
    const ofN: TDeck = [];
    for (const cardCodeAndCount of deck) {
      if (cardCodeAndCount.count === 4) of4.push(cardCodeAndCount);
      else if (cardCodeAndCount.count === 3) of3.push(cardCodeAndCount);
      else if (cardCodeAndCount.count === 2) of2.push(cardCodeAndCount);
      else if (cardCodeAndCount.count === 1) of1.push(cardCodeAndCount);
      else if (cardCodeAndCount.count < 1) throw 'Invalid count';
      else ofN.push(cardCodeAndCount);
    }
    const groupedOf4s: TDeck[] = DeckEncoder.GetGroupedOfs(of4);
    const groupedOf3s: TDeck[] = DeckEncoder.GetGroupedOfs(of3);
    const groupedOf2s: TDeck[] = DeckEncoder.GetGroupedOfs(of2);
    const groupedOf1s: TDeck[] = DeckEncoder.GetGroupedOfs(of1);
    DeckEncoder._sort(ofN);
    const encodedGroupedOf4s = DeckEncoder.EncodeGroupOf(groupedOf4s);
    const encodedGroupedOf3s = DeckEncoder.EncodeGroupOf(groupedOf3s);
    const encodedGroupedOf2s = DeckEncoder.EncodeGroupOf(groupedOf2s);
    const encodedGroupedOf1s = DeckEncoder.EncodeGroupOf(groupedOf1s);
    const encodedOfN = DeckEncoder.EncodeNOfs(ofN);
    result = DeckEncoder._mergeUint8Arrays(result, encodedGroupedOf4s);
    result = DeckEncoder._mergeUint8Arrays(result, encodedGroupedOf3s);
    result = DeckEncoder._mergeUint8Arrays(result, encodedGroupedOf2s);
    result = DeckEncoder._mergeUint8Arrays(result, encodedGroupedOf1s);
    result = DeckEncoder._mergeUint8Arrays(result, encodedOfN);
    return result;
  };

  private static _isValidDeck = (deck: TDeck): boolean => {
    for (const cardCodeAndCount of deck) {
      if (isNaN(Number(cardCodeAndCount.code.split('-')[1]))) return false;
      const set = cardCodeAndCount.code.split('-')[0] as TSets;
      if (DeckEncoder._series_to_int[set] === undefined) return false;
      if (cardCodeAndCount.count < 1) return false;
    }
    return true;
  };

  private static _sort(deck: TDeck) {
    deck.sort((a, b) => (a.code < b.code ? -1 : 1));
  }

  private static _mergeUint8Arrays(a: Uint8Array, b: Uint8Array): Uint8Array {
    const merged = new Uint8Array(a.length + b.length);
    merged.set(a);
    merged.set(b, a.length);
    return merged;
  }
}

export const getCodeFromDeck = (deck: TDeck) =>
  DeckEncoder.getCodeFromDeck(deck);
