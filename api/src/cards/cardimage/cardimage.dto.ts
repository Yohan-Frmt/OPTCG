import { IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CardDto } from "../card/card.dto";
import { ApiHideProperty, ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CardImageDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "Unique identifier generated automatically",
    example: "fc351ff4-9618-4956-8c80-7ee8b78c3924"
  })
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "File name + extension",
    example: "OP01-116.png"
  })
  readonly path: string;

  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  @ApiHideProperty()
  readonly card?: CardDto;
}
