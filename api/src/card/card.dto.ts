import {
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
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
  @IsNotEmpty()
  id: string;

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
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardColorDto)
  @IsArray()
  colors: CardColorDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardTypeDto)
  @IsArray()
  tags: CardTypeDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardImageDto)
  @IsArray()
  images: CardImageDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardRarityDto)
  @IsArray()
  rarities: CardRarityDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardErrataDto)
  @IsArray()
  errata: CardErrataDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardStatusDto)
  status: CardStatusDto;
}
