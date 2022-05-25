import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserCountry } from '../usercountry/usercountry.entity';
import { User } from '../user/user.entity';

@Entity('userregion')
export class UserRegion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  @ManyToOne(
    () => UserCountry,
    (userCountry: UserCountry) => userCountry.regions,
  )
  country: UserCountry;

  @OneToMany(() => User, (user: User) => user.region)
  users: User[];
}
