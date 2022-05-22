import { Type } from 'class-transformer';
import { IsDate, IsDefined, IsJSON, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator'
import { DeckVisibilityDto } from '../deckvisibility/deckvisibility.dto';
import { Deck } from "../deck/deck.entity";
import { DeckVisibility } from "../deckvisibility/deckvisibility.entity";
import { User } from '../user/user.entity';

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
    @ValidateNested({each: true})
    @Type(()=>UserDto)
    readonly author: UserDto;


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
    @ValidateNested({each: true})
    @Type(()=>DeckVisibilityDto)
    readonly visibility: DeckVisibilityDto;


    @IsString()
    readonly description: string;
}