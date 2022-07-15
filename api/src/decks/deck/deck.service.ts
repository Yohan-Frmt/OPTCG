import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDeckDto } from './deck.dto';
import { Deck } from './deck.entity';
import { DeckRepository } from './deck.repository';
import { User } from '../../users/user/user.entity';
import { DeckVisibility } from '../deckvisibility/deckvisibility.entity';
import { DataSource } from 'typeorm';
import { getCodeFromDeck } from '../../shared/encoder/deck-encoder';
import { TDeck } from '../../shared/encoder/types';

@Injectable()
export class DeckService {
  constructor(
    @InjectRepository(Deck) private repository: DeckRepository,
    private readonly _dataSource: DataSource,
  ) {}

  public async create(createDeck: CreateDeckDto): Promise<Deck> {
    const user = await this._dataSource.getRepository(User).findOneOrFail({
      where: { id: createDeck.author_id },
    });
    const visibility = await this._dataSource
      .getRepository(DeckVisibility)
      .findOneOrFail({
        where: { en_name: createDeck.visibility },
      });
    const deck = new Deck();
    deck.name = createDeck.name;
    deck.author = user;
    deck.leader = createDeck.leader;
    deck.content = this.encode(createDeck.content);
    deck.visibility = visibility;
    deck.description = createDeck.description;
    console.log(deck);
    return await this.repository.save(deck);
  }

  public async findAll(): Promise<Deck[]> {
    return await this.repository.find();
  }

  public async findOneById(id: string): Promise<Deck> {
    return await this.repository.findOne({ where: { id } });
  }

  public encode = (content: TDeck): string => getCodeFromDeck(content);
}
