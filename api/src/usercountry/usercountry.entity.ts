import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usercountry')
export class UserCountry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  @Column()
  iso_code: string;

  // @ManyToMany(() => User, (user: User) => user.pronouns)
  // users: User[]
}
