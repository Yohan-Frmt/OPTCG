import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardTag } from './cardtag.entity';
import { CardTagDto } from './cardtag.dto';

@Injectable()
export class CardTagService {
  constructor(
    @InjectRepository(CardTag) private readonly repository: Repository<CardTag>,
  ) {}

  public async create(card: CardTagDto): Promise<CardTag> {
    const cardCreated = await this.repository.save(card);
    return await this.repository.save(cardCreated);
  }

  public async findAll(): Promise<CardTag[]> {
    return await this.repository.find();
  }
}
