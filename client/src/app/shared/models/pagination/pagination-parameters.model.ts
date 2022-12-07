import { IPaginationOptions } from "./pagination-options.model";

export interface IPaginationParameters {
  readonly paginationOptions?: IPaginationOptions;
  readonly itemCount?: number;
}
