import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DeckVisibility } from '../deckvisibility/deckvisibility.entity';
import { User } from '../../users/user/user.entity';
@Entity()
export class Deck {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @ManyToOne((type) => User)
  author: User;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @ManyToOne((type) => DeckVisibility)
  visibility: DeckVisibility;

  @Column()
  description: string;
}
