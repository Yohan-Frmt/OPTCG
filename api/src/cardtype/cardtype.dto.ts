import {
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CardDto } from '../card/card.dto';

export class CardTypeDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  fr_name: string;

  @IsString()
  @IsNotEmpty()
  en_name: string;

  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  cards: CardDto[];
}
