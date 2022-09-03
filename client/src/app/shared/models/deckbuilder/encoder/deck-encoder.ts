import { TCardCodeAndCount, TDeck, TSets } from './types';
import { decode } from './base32';
import VarInt from './varint';

class DeckDecoder {
  private static readonly _int_to_series: Record<number, TSets | string> = {
    0: 'P',
    1: 'ST01',
    2: 'ST02',
    3: 'ST03',
    4: 'ST04',
    5: 'OP01',
  };

  public static getDeckFromCode(code: string): TDeck {
    const result: TDeck = [];
    const bytes = decode(code);
    if (!bytes) throw 'Invalid TDeck code';
    const byteList = new VarInt(bytes);
    for (let i = 4; i > 0; i--) {
      const numGroupOfs = byteList.Pop();

      for (let j = 0; j < numGroupOfs; j++) {
        const numOfsInThisGroup = byteList.Pop();
        const set = byteList.Pop();

        for (let k = 0; k < numOfsInThisGroup; k++) {
          const card = byteList.Pop();
          const setString = this._int_to_series[set];
          const cardString = card.toString(10).padStart(3, '0');
          const newEntry: TCardCodeAndCount = {
            code: setString + '-' + cardString,
            count: i,
          };

          result.push(newEntry);
        }
      }
    }
    while (byteList.length > 0) {
      const fivePlusCount = byteList.Pop();
      const fivePlusSet = byteList.Pop();
      const fivePlusNumber = byteList.Pop();

      const fivePlusSetString = this._int_to_series[fivePlusSet];
      const fivePlusNumberString = fivePlusNumber.toString().padStart(3, '0');

      const newEntry: TCardCodeAndCount = {
        code: fivePlusSetString + '-' + fivePlusNumberString,
        count: fivePlusCount,
      };

      result.push(newEntry);
    }

    return result;
  }
}

export const getDeckFromCode = (code: string): TDeck =>
  DeckDecoder.getDeckFromCode(code);
