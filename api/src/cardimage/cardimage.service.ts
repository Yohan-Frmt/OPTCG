import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardImage } from './cardimage.entity';
import { CardImageDto } from './cardimage.dto';

@Injectable()
export class CardImageService {
  constructor(
    @InjectRepository(CardImage)
    private readonly repository: Repository<CardImage>,
  ) {}

  public async create(cardImage: CardImageDto): Promise<CardImage> {
    const cardImageCreated = await this.repository.save(cardImage);
    return await this.repository.save(cardImageCreated);
  }

  public async findAll(): Promise<CardImage[]> {
    return await this.repository.find();
  }
}
