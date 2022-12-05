import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CardDto } from "../card/card.dto";
import { ApiHideProperty, ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CardTypeDto {
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
    description: "French translation of the type",
    example: "Personnage"
  })
  readonly fr_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "English translation of the type",
    example: "Character"
  })
  readonly en_name: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  @ApiHideProperty()
  readonly cards?: CardDto[];
}
