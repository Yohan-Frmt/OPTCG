import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from '../card/card.entity';

@Entity('cardattribute')
export class CardAttribute extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  @OneToOne(() => Card, (card: Card) => card.attribute)
  card: Card;
}
