import { Entity, PrimaryGeneratedColumn, Column, Generated, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { DeckVisibility } from 'src/deckvisibility/deckvisibility.entity';
import { User } from 'src/user/user.entity';
@Entity()
export class Deck {
   @PrimaryGeneratedColumn("uuid")
   id: string ;

   @Column({length: 50})
   name: string;

   /*@Column()
   author: User ; // TODO*/

   @Column()
   content: string;

   @CreateDateColumn()
   created_on

   @UpdateDateColumn()
   updated_on

   @ManyToOne(type => DeckVisibility)
   visibility: DeckVisibility

   @Column()
   description: string
}