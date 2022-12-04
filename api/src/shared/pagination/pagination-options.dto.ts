import { IsEnum, IsInt, IsOptional, Max, Min } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";

enum Order {
  ASC = "ASC",
  DESC = "DESC"
}

export class PaginationOptionsDto {
  @IsEnum(Order)
  @IsOptional()
  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  readonly order?: Order = Order.ASC;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  @ApiPropertyOptional({ minimum: 1, default: 1 })
  readonly page?: number = 1;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  @Max(100)
  @ApiPropertyOptional({ minimum: 1, maximum: 100, default: 20 })
  readonly take?: number = 20;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
