import {
  ArrayNotEmpty,
  IsArray,
  IsISO31661Alpha2,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserRegionDto } from '../userregion/userregion.dto';
import { UserDto } from '../user/user.dto';

export class UserCountryDto {
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
  @IsISO31661Alpha2()
  readonly iso_code: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => UserRegionDto)
  readonly regions?: UserRegionDto[];

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  readonly users?: UserDto[];
}
