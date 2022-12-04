import { PaginationMetaDto } from "./pagination-meta.dto";
import { IsArray } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class PaginationDto<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @Type(() => PaginationMetaDto)
  @ApiProperty({ type: () => PaginationMetaDto })
  readonly meta: PaginationMetaDto;

  constructor(data: T[], meta: PaginationMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
