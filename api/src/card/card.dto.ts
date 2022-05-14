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

export class CardDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  serial_number: string;

  @IsString()
  @IsNotEmpty()
  fr_name: string;

  @IsString()
  @IsNotEmpty()
  en_name: string;

  @IsString()
  @IsNotEmpty()
  jp_name: string;

  @IsNumber()
  @IsNotEmpty()
  cost: number;

  @IsNumber()
  @IsNotEmpty()
  power: number;

  @IsNumber()
  @IsNotEmpty()
  life: number;

  @IsString()
  @IsNotEmpty()
  fr_effect: string;

  @IsString()
  @IsNotEmpty()
  en_effect: string;

  @IsNumber()
  @IsNotEmpty()
  counter: number;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardSetDto)
  set: CardSetDto;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardTypeDto)
  type: CardTypeDto;

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardColorDto)
  colors: CardColorDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardTypeDto)
  tags: CardTypeDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardImageDto)
  images: CardImageDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardRarityDto)
  rarities: CardRarityDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardErrataDto)
  errata: CardErrataDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardStatusDto)
  status: CardStatusDto;
}
