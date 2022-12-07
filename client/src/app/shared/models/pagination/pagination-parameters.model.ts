import { PaginationOptions } from "./pagination-options.model";

export interface PaginationParameters {
  readonly paginationOptions?: PaginationOptions;
  readonly itemCount?: number;
}
