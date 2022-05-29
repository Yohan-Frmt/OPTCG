import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserCountry } from '../usercountry/usercountry.entity';
import { UserCountryDto } from '../usercountry/usercountry.dto';

export class UserRegionDto {
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

  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => UserCountry)
  readonly country?: UserCountryDto;

  // @IsOptional()
  // @IsArray()
  // @ArrayNotEmpty()
  // @ValidateNested({ each: true })
  // @Type(() => UserDto)
  // readonly users: UserDto[];
}
