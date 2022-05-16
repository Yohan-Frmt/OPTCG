import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('userpronoun')
export class UserPronoun {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  // @ManyToMany(() => User, (user: User) => user.pronouns)
  // users: User[]
}
