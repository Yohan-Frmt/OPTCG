export interface IPaginationMeta {
  readonly page: number;
  readonly take: number;
  readonly skip?: number;
  readonly itemCount: number;
  readonly pageCount: number;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
}
