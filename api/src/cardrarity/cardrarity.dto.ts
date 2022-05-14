import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CardDto } from '../card/card.dto';

export class CardRarityDto {
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

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  cards: CardDto[];
}
