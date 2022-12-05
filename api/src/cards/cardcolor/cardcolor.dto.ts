import {
  ArrayNotEmpty,
  IsArray,
  IsHexColor,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested
} from "class-validator";
import { CardDto } from "../card/card.dto";
import { Type } from "class-transformer";
import { ApiHideProperty, ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CardColorDto {
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
    description: "French translation of the color",
    example: "Rouge"
  })
  readonly fr_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "English translation of the color",
    example: "Red"
  })
  readonly en_name: string;

  @IsHexColor()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "Hexadecimal value of the color",
    example: "#ff0000"
  })
  readonly hex_color: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  @ApiHideProperty()
  readonly cards?: CardDto[];
}
