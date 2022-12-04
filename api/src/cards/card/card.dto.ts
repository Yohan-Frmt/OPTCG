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
  @ApiPropertyOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly serial_number: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly fr_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly en_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly jp_name: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  readonly cost?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  readonly power?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  readonly life?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly prev?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly next?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly fr_effect?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly en_effect?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly fr_trigger_effect?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly en_trigger_effect?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
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
  @ApiProperty({ type: () => CardColorDto })
  readonly colors: CardColorDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardTypeDto)
  @ApiProperty({ type: () => CardTypeDto })
  readonly tags: CardTypeDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardImageDto)
  @ApiProperty({ type: () => CardImageDto })
  readonly images: CardImageDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardRarityDto)
  @ApiProperty({ type: () => CardRarityDto })
  readonly rarities: CardRarityDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardErrataDto)
  @ApiPropertyOptional({ type: () => CardErrataDto })
  readonly errata?: CardErrataDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardStatusDto)
  @ApiProperty({ type: () => CardStatusDto })
  readonly status: CardStatusDto;
}
