import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('deckvisibility')
export class DeckVisibility {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;
}
