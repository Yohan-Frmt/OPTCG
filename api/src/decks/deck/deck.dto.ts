import { Type } from "class-transformer";
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested
} from "class-validator";
import { DeckVisibilityDto } from "../deckvisibility/deckvisibility.dto";
import { UserDto } from "../../users/user/user.dto";
import { TDeck } from "../../shared/encoder/types";

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
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly leader: string;

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

  @IsNotEmpty()
  readonly content: TDeck;

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
