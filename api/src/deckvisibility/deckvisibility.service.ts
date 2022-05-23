import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeckVisibility } from "./deckvisibility.entity";
import { DeckVisibilityRepository } from "./deckvisibility.repository";

@Injectable()
export class DeckVisibilityService {
    constructor(@InjectRepository(DeckVisibility) private repository: DeckVisibilityRepository) {

    }

    public async findAll(): Promise<DeckVisibility[]> {
        return await this.repository.find();
    }
}