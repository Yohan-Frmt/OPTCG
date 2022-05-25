import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from '../card/card.entity';

@Entity('cardrarity')
export class CardRarity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  @Column()
  abbr: string;

  @ManyToMany(() => Card, (card: Card) => card.rarities)
  cards: Card[];
}
