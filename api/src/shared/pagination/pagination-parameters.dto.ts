import { PaginationOptionsDto } from "./pagination-options.dto";

export class PaginationParametersDto {
  readonly paginationOptions: PaginationOptionsDto;
  readonly itemCount: number;
}
