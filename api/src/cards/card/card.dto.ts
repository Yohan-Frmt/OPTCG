import {
  ArrayNotEmpty,
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested
} from "class-validator";
import { CardSetDto } from "../cardset/cardset.dto";
import { CardTypeDto } from "../cardtype/cardtype.dto";
import { CardColorDto } from "../cardcolor/cardcolor.dto";
import { CardImageDto } from "../cardimage/cardimage.dto";
import { CardRarityDto } from "../cardrarity/cardrarity.dto";
import { CardStatusDto } from "../cardstatus/cardstatus.dto";
import { Type } from "class-transformer";
import { CardErrataDto } from "../carderrata/carderrata.dto";
import { CardAttributeDto } from "../cardattribute/cardattribute.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CardDto {
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
    description: "Code on the bottom-right of cards, intended to denote the set from which the card originated and its position in that set",
    example: "OP01-116"
  })
  readonly serial_number: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "French translation of the card",
    example: "Fruit du Démon artificiel SMILE"
  })
  readonly fr_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "English translation of the card",
    example: "Artificial Devil Fruit SMILE"
  })
  readonly en_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "Original name of the card",
    example: "人造悪魔の実SMILE"
  })
  readonly jp_name: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    description: "Cost needed to be paid to play the card",
    example: 5
  })
  readonly cost?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    description: "Attack power of the card",
    example: 10000
  })
  readonly power?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    description: "Life point of your leader card",
    example: 8
  })
  readonly life?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "Previous card in the set",
    example: "OP01-115"
  })
  readonly prev?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "Next card in the set",
    example: "OP01-117"
  })
  readonly next?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "French translation of the effect described on the card",
    example: "[DON!! x1] [Votre Tour] Tout vos Personnages gagnent +1000 de Puissance."
  })
  readonly fr_effect?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "English translation of the effect described on the card",
    example: "[DON!! x1] [Your Turn] All your Characters gain +1000 Power."
  })
  readonly en_effect?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "French translation of the trigger effect described on the card",
    example: "Le Leader adverse ou 1 de ses Personnages perd 10000 de Puissance jusqu'à la fin du tour."
  })
  readonly fr_trigger_effect?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: "English translation of the trigger effect described on the card",
    example: "Your opponent's Leader or 1 of their Characters loses 10000 Power until the end of the turn."
  })
  readonly en_trigger_effect?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    description: "Counter stat display on the card's left",
    example: 1000
  })
  readonly counter?: number;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardAttributeDto)
  @ApiProperty({ type: () => CardAttributeDto })
  readonly attribute: CardAttributeDto;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardSetDto)
  @ApiProperty({ type: () => CardSetDto })
  readonly set: CardSetDto;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardTypeDto)
  @ApiProperty({ type: () => CardTypeDto })
  readonly type: CardTypeDto;

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardColorDto)
  @ApiProperty({ type: () => [CardColorDto] })
  readonly colors: CardColorDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardTypeDto)
  @ApiProperty({ type: () => [CardTypeDto] })
  readonly tags: CardTypeDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardImageDto)
  @ApiProperty({ type: () => [CardImageDto] })
  readonly images: CardImageDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardRarityDto)
  @ApiProperty({ type: () => [CardRarityDto] })
  readonly rarities: CardRarityDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardErrataDto)
  @ApiPropertyOptional({ type: () => [CardErrataDto] })
  readonly errata?: CardErrataDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardStatusDto)
  @ApiProperty({ type: () => CardStatusDto })
  readonly status: CardStatusDto;
}
