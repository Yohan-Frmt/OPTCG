import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRegion } from '../userregion/userregion.entity';
import { User } from '../user/user.entity';

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

  @OneToMany(() => UserRegion, (userRegion: UserRegion) => userRegion.country)
  regions: UserRegion[];

  @OneToMany(() => User, (user: User) => user.country)
  users: User[];
}
