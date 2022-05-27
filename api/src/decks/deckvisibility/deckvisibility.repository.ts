import { DeckVisibility } from './deckvisibility.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(DeckVisibility)
export class DeckVisibilityRepository extends Repository<DeckVisibility> {}
