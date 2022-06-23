import { Deck } from './deck.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Deck)
export class DeckRepository extends Repository<Deck> {}
