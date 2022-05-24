import { Deck } from "./deck.entity";
import { EntityRepository, Repository } from "typeorm";
import { DeckDto } from "./deck.dto";

@EntityRepository(Deck)
    export class DeckRepository extends Repository<Deck> {
    }