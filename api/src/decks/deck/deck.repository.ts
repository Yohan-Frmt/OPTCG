import { Deck } from './deck.entity';
import { EntityRepository, Repository } from 'typeorm';
import { DeckDto } from './deck.dto';

@EntityRepository(Deck)
export class DeckRepository extends Repository<Deck> {
  public async createDeck(deckDto: DeckDto) {
    return await this.save(deckDto);
  }
  public async findAll() {
    return await this.find();
  }
}
