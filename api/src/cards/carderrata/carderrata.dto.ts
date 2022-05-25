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
  readonly id?: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  readonly date?: Date;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => CardSetDto)
  readonly card?: CardDto;
}
