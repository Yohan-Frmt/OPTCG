import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from '../card/card.entity';

@Entity('cardtype')
export class CardType extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  @OneToMany(() => Card, (card: Card) => card.type)
  cards: Card[];
}
