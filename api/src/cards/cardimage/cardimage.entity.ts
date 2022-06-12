import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from '../card/card.entity';

@Entity('cardimage')
export class CardImage extends BaseEntity {
  constructor(image: string) {
    super();
    this.path = image;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  path: string;

  @ManyToOne(() => Card, (card: Card) => card.images)
  card: Card;
}
