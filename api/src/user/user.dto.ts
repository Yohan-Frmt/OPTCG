import { UserCountryDto } from '../usercountry/usercountry.dto';
import { UserRegionDto } from '../userregion/userregion.dto';
import { UserStoreDto } from '../userstore/userstore.dto';
import { UserPronounDto } from '../userpronoun/userpronoun.dto';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UserDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsBoolean()
  readonly isActive: boolean = true;

  @IsString()
  @IsNotEmpty()
  readonly discord: string;

  @IsBoolean()
  readonly isStore: boolean = false;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => UserCountryDto)
  readonly country: UserCountryDto;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => UserRegionDto)
  readonly region: UserRegionDto;

  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserStoreDto)
  readonly stores: UserStoreDto[];

  @IsDefined()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserPronounDto)
  readonly pronouns: UserPronounDto[];

  @IsDate()
  @IsOptional()
  readonly created_at?: Date;

  @IsDate()
  @IsOptional()
  readonly last_login?: Date;
}
