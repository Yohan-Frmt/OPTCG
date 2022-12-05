import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
  ValidateNested
} from "class-validator";
import { Type } from "class-transformer";
import { CardDto } from "../card/card.dto";
import { ApiHideProperty, ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CardStatusDto {
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
    description: "French translation of the status",
    example: "Illimité"
  })
  readonly fr_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "English translation of the status",
    example: "Unlimited"
  })
  readonly en_name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(4)
  @ApiProperty({
    type: String,
    description: "Number of card allowed in a deck",
    example: 4,
    minimum: 0,
    maximum: 4
  })
  readonly max_amount: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  @ApiHideProperty()
  readonly cards?: CardDto[];
}
