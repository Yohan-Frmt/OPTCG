import {
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CardSetDto } from '../cardset/cardset.dto';
import { CardDto } from '../card/card.dto';

export class CardErrataDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  date?: Date;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => CardSetDto)
  card?: CardDto;
}
