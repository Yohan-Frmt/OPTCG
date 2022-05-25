import {
  ArrayNotEmpty,
  IsArray,
  IsHexColor,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CardDto } from '../card/card.dto';
import { Type } from 'class-transformer';

export class CardColorDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly fr_name: string;

  @IsString()
  @IsNotEmpty()
  readonly en_name: string;

  @IsHexColor()
  @IsString()
  @IsNotEmpty()
  readonly hex_color: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  readonly cards?: CardDto[];
}
