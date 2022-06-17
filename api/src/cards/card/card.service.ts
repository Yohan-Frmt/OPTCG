import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { getRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { CardDto } from './card.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly repository: Repository<Card>,
  ) {}

  public async create(card: CardDto): Promise<Card> {
    const cardCreated = await this.repository.create(card);
    return await this.repository.save(cardCreated);
  }

  public async findAll(query?: any): Promise<Card[]> {
    const wq = (qb: SelectQueryBuilder<Card>) => {
      for (const items of query) {
        const [type, value] = items;
        if (!value) continue;
        switch (type) {
          case 'rarity':
            qb.andWhere('rarity.en_name = :r', { r: value });
            break;
          case 'set':
            qb.andWhere('set.en_name = :s', { s: value });
            break;
        }
      }
    };
    return await getRepository(Card)
      .createQueryBuilder('card')
      .leftJoinAndSelect('card.set', 'set')
      .leftJoinAndSelect('card.type', 'type')
      .leftJoinAndSelect('card.colors', 'colors')
      .leftJoinAndSelect('card.tags', 'tags')
      .leftJoinAndSelect('card.images', 'images')
      .leftJoinAndSelect('card.errata', 'errata')
      .leftJoinAndSelect('card.rarities', 'rarity')
      .leftJoinAndSelect('card.status', 'status')
      .where(wq)
      .orderBy('card.serial_number', 'ASC')
      .getMany();
  }

  public async findOneBySerial(serial: string): Promise<Card> {
    return await this.repository.findOne({
      where: {
        serial_number: serial,
      },
      relations: [
        'set',
        'type',
        'colors',
        'tags',
        'images',
        'errata',
        'rarities',
        'status',
      ],
    });
  }
}
