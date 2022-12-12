import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested
} from "class-validator";
import { Type } from "class-transformer";
import { CardDto } from "../card/card.dto";

export class CardSetDto {
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

  @IsString()
  @IsNotEmpty()
  readonly set_number: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  readonly jp_release?: Date;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  readonly wld_release?: Date;


  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  readonly cards?: CardDto[];
}
