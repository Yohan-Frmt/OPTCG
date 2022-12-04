import { PaginationParametersDto } from "./pagination-parameters.dto";
import { ApiProperty } from "@nestjs/swagger";


export class PaginationMetaDto {
  @ApiProperty()
  readonly page: number;

  @ApiProperty()
  readonly take: number;

  @ApiProperty()
  readonly skip: number;

  @ApiProperty()
  readonly itemCount: number;

  @ApiProperty()
  readonly pageCount: number;

  @ApiProperty()
  readonly hasNextPage: boolean;

  @ApiProperty()
  readonly hasPreviousPage: boolean;

  constructor({ itemCount, paginationOptions: { page, take } }: PaginationParametersDto) {
    this.page = page;
    this.take = take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasNextPage = this.page < this.pageCount;
    this.hasPreviousPage = this.page > 1;
  }
}
