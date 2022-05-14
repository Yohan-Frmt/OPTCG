import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CardDto } from '../card/card.dto';

export class CardStatusDto {
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

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(4)
  max_amount: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  cards: CardDto[];
}
