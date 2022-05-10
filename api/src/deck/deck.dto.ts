import { IsJSON, IsOptional } from 'class-validator'
import { Deck } from "src/deck/deck.entity";
import { DeckVisibility } from "src/deckvisibility/deckvisibility.entity";
import { User } from 'src/user/user.entity';

export class DeckDto {
    id: string;
    name: string;
    author: User;
    @IsJSON()
    content: string;
    readonly created_on: Date;
    readonly updated_on: Date;
    visibility: DeckVisibility;
    @IsOptional()
    description: string;
}