import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeckVisibility } from "../deckvisibility/deckvisibility.entity";
import { User } from "../../users/user/user.entity";

@Entity()
export class Deck {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @ManyToOne(() => User)
  author: User;

  @Column()
  content: string;

  @Column()
  leader: string;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @ManyToOne(() => DeckVisibility)
  visibility: DeckVisibility;

  @Column()
  description: string;
}
