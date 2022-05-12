import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CardRarity } from './cardrarity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CardRarityDto } from './cardrarity.dto';

@Injectable()
export class CardRarityService {
  constructor(
    @InjectRepository(CardRarity)
    private readonly repository: Repository<CardRarity>,
  ) {}

  public async create(CardRarity: CardRarityDto): Promise<CardRarity> {
    const CardRarityCreated = await this.repository.create(CardRarity);
    return await this.repository.save(CardRarityCreated);
  }

  public async findAll(): Promise<CardRarity[]> {
    return await this.repository.find();
  }
}
