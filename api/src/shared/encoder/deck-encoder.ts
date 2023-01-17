import { TCardCodeAndCount, TDeck } from "./types";
import VarInt from "./varint";
import { decode, encode } from "./base32";

const MAX_CARD_DUP = 4;

const intToSets: Record<number, string> = {
  0: "P",
  1: "ST01",
  2: "ST02",
  3: "ST03",
  4: "ST04",
  5: "OP01",
  6: "OP02",
  7: "ST05",
  8: "ST06"
};

const setsToInt = Object.entries(intToSets).reduce(
  (obj, [key, value]) => {
    obj[value] = parseInt(key, 10);
    return obj;
  },
  {} as Record<string, number>
);

class DeckEncoder {
  public static getCodeFromDeck = (deck: TDeck) => {
    const bytes = this.getBytes(deck);
    return encode(bytes);
  };

  private static getBytes = (deck: TDeck): Uint8Array => {
    if (!DeckEncoder.IsValidDeck(deck)) throw "The provided deck contains invalid card codes.";
    let result = new Uint8Array([]);
    const of4: TDeck = [];
    const of3: TDeck = [];
    const of2: TDeck = [];
    const of1: TDeck = [];
    const ofN: TDeck = [];
    for (const ccc of deck) {
      if (ccc.count == 4) of4.push(ccc);
      else if (ccc.count == 3) of3.push(ccc);
      else if (ccc.count == 2) of2.push(ccc);
      else if (ccc.count == 1) of1.push(ccc);
      else if (ccc.count < 1) throw "Invalid count of " + ccc.count + " for card " + ccc.code;
      else ofN.push(ccc);
    }
    let groupOf4s: TDeck[] = DeckEncoder.GetGroupedOfs(of4);
    let groupOf3s: TDeck[] = DeckEncoder.GetGroupedOfs(of3);
    let groupOf2s: TDeck[] = DeckEncoder.GetGroupedOfs(of2);
    let groupOf1s: TDeck[] = DeckEncoder.GetGroupedOfs(of1);
    groupOf4s = DeckEncoder.Sort(groupOf4s);
    groupOf3s = DeckEncoder.Sort(groupOf3s);
    groupOf2s = DeckEncoder.Sort(groupOf2s);
    groupOf1s = DeckEncoder.Sort(groupOf1s);
    ofN.sort((a, b) => a.code.localeCompare(b.code));
    const encodedGroupOf4s = DeckEncoder.EncodeGroupOf(groupOf4s);
    const encodedGroupOf3s = DeckEncoder.EncodeGroupOf(groupOf3s);
    const encodedGroupOf2s = DeckEncoder.EncodeGroupOf(groupOf2s);
    const encodedGroupOf1s = DeckEncoder.EncodeGroupOf(groupOf1s);
    const encodedOfN = DeckEncoder.EncodeNOfs(ofN);
    result = mergeArrays(result, encodedGroupOf4s);
    result = mergeArrays(result, encodedGroupOf3s);
    result = mergeArrays(result, encodedGroupOf2s);
    result = mergeArrays(result, encodedGroupOf1s);
    result = mergeArrays(result, encodedOfN);
    return result;
  };

  private static GetGroupedOfs = (group: TDeck): TDeck[] => {
    const result: TDeck[] = [];
    while (group.length > 0) {
      const currentDeckSet: TDeck = [];
      const firstCard = group[0].code;
      const { set } = DeckEncoder.ParseCode(firstCard);
      currentDeckSet.push(group[0]);
      group.shift();
      for (let i = group.length - 1; i >= 0; i--) {
        if (group[i].code.split("-")[0] !== set) continue;
        currentDeckSet.push(group[i]);
        group.splice(i, 1);
      }
      result.push(currentDeckSet);
    }
    return result;
  };

  private static ParseCode = (code: string): { number: number; set: string } => ({
    set: code.split("-")[0],
    number: Number(code.split("-")[1])
  });

  private static IsValidDeck = (deck: TDeck): boolean => {
    for (const ccc of deck) {
      const [set, code] = ccc.code.split("-");
      if (setsToInt[set] === undefined) return false;
      if (isNaN(Number(code))) return false;
      if (ccc.count < 1) return false;
    }
    return true;
  };

  private static Sort = (group: TDeck[]): TDeck[] => {
    const sorted = group.sort((a, b) => (a.length < b.length ? -1 : 1));
    sorted.forEach((deck) => deck.sort((a, b) => a.code.localeCompare(b.code)));
    return sorted;
  };

  private static EncodeGroupOf = (group: TDeck[]): Uint8Array => {
    let bytes: Uint8Array = new Uint8Array([]);
    bytes = mergeArrays(bytes, VarInt.Get(group.length));
    for (const currentList of group) {
      bytes = mergeArrays(bytes, VarInt.Get(currentList.length));
      bytes = mergeArrays(bytes, VarInt.Get(setsToInt[DeckEncoder.ParseCode(currentList[0].code).set]));
      for (const card of currentList) bytes = mergeArrays(bytes, VarInt.Get(Number(card.code.split("-")[1])));
    }
    return bytes;
  };

  private static EncodeNOfs = (group: TDeck): Uint8Array => {
    let bytes: Uint8Array = new Uint8Array();
    for (const ccc of group) {
      bytes = mergeArrays(bytes, VarInt.Get(ccc.count));
      const { set, number } = this.ParseCode(ccc.code);
      bytes = mergeArrays(bytes, VarInt.Get(setsToInt[set]));
      bytes = mergeArrays(bytes, VarInt.Get(number));
    }
    return bytes;
  };
}

class DeckDecoder {
  public static getDeckFromCode = (code: string): TDeck => {
    const result: TDeck = [];
    const bytes = decode(code);
    if (!bytes) throw "Invalid deck code";
    const byteList = new VarInt(bytes);
    for (let i = MAX_CARD_DUP; i > 0; i--) {
      const numGroupOfs = byteList.Pop();
      for (let j = 0; j < numGroupOfs; j++) {
        const numOfsInThisGroup = byteList.Pop();
        const set = byteList.Pop();
        for (let k = 0; k < numOfsInThisGroup; k++) {
          const card = byteList.Pop();
          const setString = intToSets[set];
          const cardString = card.toString().padStart(3, "0");
          const newEntry: TCardCodeAndCount = {
            code: setString + "-" + cardString,
            count: i
          };
          result.push(newEntry);
        }
      }
    }
    while (byteList.length > 0) {
      const fourPlusCount = byteList.Pop();
      const fourPlusSet = byteList.Pop();
      const fourPlusNumber = byteList.Pop();
      const fourPlusSetString = intToSets[fourPlusSet];
      const fourPlusNumberString = fourPlusNumber.toString().padStart(3, "0");
      const newEntry: TCardCodeAndCount = {
        code: fourPlusSetString + "-" + fourPlusNumberString,
        count: fourPlusCount
      };
      result.push(newEntry);
    }
    return result;
  };
}

const mergeArrays = (a: Uint8Array, b: Uint8Array): Uint8Array => {
  const merged = new Uint8Array(a.length + b.length);
  merged.set(a);
  merged.set(b, a.length);
  return merged;
};
export const getCodeFromDeck = (deck: TDeck) => DeckEncoder.getCodeFromDeck(deck);
export const getDeckFromCode = (code: string): TDeck => DeckDecoder.getDeckFromCode(code);
