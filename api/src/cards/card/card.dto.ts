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
  ValidateNested,
} from 'class-validator';
import { CardSetDto } from '../cardset/cardset.dto';
import { CardTypeDto } from '../cardtype/cardtype.dto';
import { CardColorDto } from '../cardcolor/cardcolor.dto';
import { CardImageDto } from '../cardimage/cardimage.dto';
import { CardRarityDto } from '../cardrarity/cardrarity.dto';
import { CardStatusDto } from '../cardstatus/cardstatus.dto';
import { Type } from 'class-transformer';
import { CardErrataDto } from '../carderrata/carderrata.dto';
import { CardAttributeDto } from '../cardattribute/cardattribute.dto';

export class CardDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly serial_number: string;

  @IsString()
  @IsNotEmpty()
  readonly fr_name: string;

  @IsString()
  @IsNotEmpty()
  readonly en_name: string;

  @IsString()
  @IsNotEmpty()
  readonly jp_name: string;

  @IsNumber()
  @IsOptional()
  readonly cost?: number;

  @IsNumber()
  @IsOptional()
  readonly power?: number;

  @IsNumber()
  @IsOptional()
  readonly life?: number;

  @IsString()
  @IsOptional()
  readonly fr_effect?: string;

  @IsString()
  @IsOptional()
  readonly en_effect?: string;

  @IsString()
  @IsOptional()
  readonly fr_trigger_effect?: string;

  @IsString()
  @IsOptional()
  readonly en_trigger_effect?: string;

  @IsNumber()
  @IsOptional()
  readonly counter?: number;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardAttributeDto)
  readonly attribute: CardAttributeDto;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardSetDto)
  readonly set: CardSetDto;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardTypeDto)
  readonly type: CardTypeDto;

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardColorDto)
  readonly colors: CardColorDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardTypeDto)
  readonly tags: CardTypeDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardImageDto)
  readonly images: CardImageDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardRarityDto)
  readonly rarities: CardRarityDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardErrataDto)
  readonly errata?: CardErrataDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardStatusDto)
  readonly status: CardStatusDto;
}
