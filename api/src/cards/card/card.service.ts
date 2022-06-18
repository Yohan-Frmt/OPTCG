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
            qb.leftJoinAndSelect('card.rarities', 'rarity').andWhere(
              'rarity.en_name = :r',
              { r: value },
            );
            break;
          case 'set':
            qb.leftJoinAndSelect('card.set', 'set').andWhere(
              'set.en_name = :s',
              { s: value },
            );
            break;
          case 'status':
            qb.leftJoinAndSelect('card.status', 'status').andWhere(
              'status.en_name = :st',
              { st: value },
            );
            break;
          case 'type':
            qb.leftJoinAndSelect('card.type', 'type').andWhere(
              'type.en_name = :t',
              { t: value },
            );
            break;
          case 'tags':
            for (const [idx, tag] of value.split(',').entries()) {
              const params = {};
              params[`t${idx}`] = tag;
              qb.innerJoinAndSelect(`card.tags`, `tags${idx}`).andWhere(
                `tags${idx}.en_name = :t${idx}`,
                params,
              );
            }
            break;
          case 'colors':
            for (const [idx, color] of value.split(',').entries()) {
              const params = {};
              params[`c${idx}`] = color;
              qb.innerJoinAndSelect(`card.colors`, `colors${idx}`).andWhere(
                `colors${idx}.en_name = :c${idx}`,
                params,
              );
            }
            break;
        }
      }
    };
    return await getRepository(Card)
      .createQueryBuilder('card')
      .leftJoinAndSelect('card.colors', 'colors')
      .leftJoinAndSelect('card.images', 'images')
      .leftJoinAndSelect('card.errata', 'errata')
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
