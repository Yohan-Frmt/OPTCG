import { DeckVisibility } from "./deckvisibility.entity";
import { EntityRepository, Repository } from "typeorm";
import { DeckVisibilityDto } from "./deckvisibility.dto";

@EntityRepository(DeckVisibility)
    export class DeckVisibilityRepository extends Repository<DeckVisibility> {
        public async createDeckVisibility (deckVisibilityDto: DeckVisibilityDto) {
            return await this.save(deckVisibilityDto)
        }
        public async findAll () {
            return await this.find();
        }
    }