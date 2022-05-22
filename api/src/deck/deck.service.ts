import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeckDto } from "./deck.dto";
import { Deck } from "./deck.entity";
import { DeckRepository } from "./deck.repository";

@Injectable()
export class DeckService {
    constructor(@InjectRepository(DeckRepository) private repository: DeckRepository) {

    }
    
    public async create(deck: DeckDto):  Promise<Deck> {
        const returnedDeck: Deck = await this.repository.create(deck);
        return await this.repository.save(returnedDeck);
    }

    public async findAll(): Promise<Deck[]> {
        return await this.repository.findAll();
    }
}