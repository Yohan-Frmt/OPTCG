import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsJSON,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { DeckVisibilityDto } from '../deckvisibility/deckvisibility.dto';
import { UserDto } from '../../users/user/user.dto';

export class DeckDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  @IsOptional()
  readonly author?: UserDto;

  @IsString()
  @IsNotEmpty()
  @IsJSON()
  readonly content: string;

  @IsDate()
  @IsOptional()
  readonly created_at?: Date;

  @IsDate()
  @IsOptional()
  readonly updated_at?: Date;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => DeckVisibilityDto)
  @IsOptional()
  readonly visibility: DeckVisibilityDto;

  @IsString()
  readonly description: string;
}

export class CreateDeckDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly author_id: string;

  @IsString()
  @IsNotEmpty()
  readonly visibility: string;
}
