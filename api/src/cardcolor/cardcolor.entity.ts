import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from '../card/card.entity';

@Entity('cardcolor')
export class CardColor extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  @Column()
  hex_color: string;

  @OneToMany(() => Card, (card: Card) => card.color)
  cards: Card[];
}
