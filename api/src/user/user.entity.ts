
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserCountry } from '../usercountry/usercountry.entity';
import { UserRegion } from '../userregion/userregion.entity';
import { UserPronoun } from '../userpronoun/userpronoun.entity';
import { UserStore } from '../userstore/userstore.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  discord: string;

  @Column({ default: false })
  isStore: boolean;

  @ManyToOne(() => UserCountry, (userCountry: UserCountry) => userCountry.users)
  country: UserCountry;

  @ManyToOne(() => UserRegion, (userRegion: UserRegion) => userRegion.users)
  region: UserRegion;

  @OneToMany(() => UserStore, (userStore: UserStore) => userStore.user)
  stores: UserStore[];

  @ManyToMany(
    () => UserPronoun,
    (userPronoun: UserPronoun) => userPronoun.users,
  )
  pronouns: UserPronoun[];

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'timestamptz' })
  last_login: Date;
}
