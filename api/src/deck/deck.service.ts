import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeckRepository } from "./deck.repository";

@Injectable()
export class DeckService {
    constructor(@InjectRepository(DeckRepository) private repository: DeckRepository) {

    }

    public async findAll() {
        return await this.repository.findAll();
    }
}