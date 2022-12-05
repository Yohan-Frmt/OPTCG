import {
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested
} from "class-validator";
import { Type } from "class-transformer";
import { CardSetDto } from "../cardset/cardset.dto";
import { CardDto } from "../card/card.dto";
import { ApiHideProperty, ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CardErrataDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "Unique identifier generated automatically",
    example: "fc351ff4-9618-4956-8c80-7ee8b78c3924"
  })
  readonly id?: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    type: "string",
    format: "date-time",
    example: "2018-11-21T06:20:32.232Z"
  })
  readonly date?: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "Description of the change made to the card",
    example: "Power reduce from 5000 to 3000"
  })
  readonly description: string;

  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => CardSetDto)
  @ApiHideProperty()
  readonly card?: CardDto;
}
