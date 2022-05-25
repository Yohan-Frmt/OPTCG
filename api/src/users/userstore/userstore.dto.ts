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
import { UserDto } from '../user/user.dto';

export class UserStoreDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly address1: string;

  @IsString()
  @IsOptional()
  readonly address2?: string;

  @IsString()
  @IsNotEmpty()
  readonly zip_code: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  readonly user?: UserDto;
}
