import { DeckVisibility } from "./deckvisibility.entity";
import { EntityRepository, Repository } from "typeorm";
import { DeckVisibilityDto } from "./deckvisibility.dto";

@EntityRepository(DeckVisibility)
    export class DeckVisibilityRepository extends Repository<DeckVisibility> {
    }