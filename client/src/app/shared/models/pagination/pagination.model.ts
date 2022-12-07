import { PaginationMeta } from "./pagination-meta.model";

export interface Pagination<T> {
  readonly data: T[];
  readonly meta: PaginationMeta;
}
