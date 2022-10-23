import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from '../card/card.entity';

@Entity('cardset')
export class CardSet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;
  
  @Column()
  set_number: string;

  @OneToMany(() => Card, (card: Card) => card.set)
  cards: Card[];
}
