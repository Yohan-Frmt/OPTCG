import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CardColorDto } from './cardcolor.dto';
import { CardColor } from './cardcolor.entity';

@Injectable()
export class CardColorService {
  constructor(
    @InjectRepository(CardColor)
    private readonly repository: Repository<CardColor>,
  ) {}

  public async create(cardColor: CardColorDto): Promise<CardColor> {
    const cardColorCreated = await this.repository.create(cardColor);
    return await this.repository.save(cardColorCreated);
  }

  public async findAll(): Promise<CardColor[]> {
    return await this.repository.find();
  }
}
