import { IPaginationMeta } from "./pagination-meta.model";

export interface IPagination<T> {
  readonly data: T[];
  readonly meta: IPaginationMeta;
}
