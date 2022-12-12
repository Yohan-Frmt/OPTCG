export interface TCardCodeAndCount {
  code: string;
  count: number;
  percent?: number;
}

export type TDeck = TCardCodeAndCount[];
