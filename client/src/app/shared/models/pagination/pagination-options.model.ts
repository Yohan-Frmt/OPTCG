export enum Order {
  ASC = "ASC",
  DESC = "DESC"
}

export interface IPaginationOptions {
  readonly order: Order;
  readonly page: number;
  readonly take: number;
  readonly attribute?: string;
  readonly rarities?: string;
  readonly sets?: string;
  readonly status?: string;
  readonly costs?: string;
  readonly powers?: string;
  readonly types?: string[];
  readonly tags?: string[];
  readonly colors?: string[];
  readonly search?: string;

  get skip(): number;
}
