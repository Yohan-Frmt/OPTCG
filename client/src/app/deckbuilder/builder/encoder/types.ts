export type TSets = "P" | "ST01" | "ST02" | "ST03" | "ST04" | "OP01";

export interface TCardCodeAndCount {
  code: string;
  count: number;
  percent?: number;
}

export type TDeck = TCardCodeAndCount[];
