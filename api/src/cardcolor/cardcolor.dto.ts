import {
  IsDefined,
  IsHexColor,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CardDto } from '../card/card.dto';
import { Type } from 'class-transformer';

export class CardColorDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  fr_name: string;

  @IsString()
  @IsNotEmpty()
  en_name: string;

  @IsHexColor()
  @IsString()
  @IsNotEmpty()
  hex_color: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  cards: CardDto[];
}
