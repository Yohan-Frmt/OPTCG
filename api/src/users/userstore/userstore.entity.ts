import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('userstore')
export class UserStore {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  zip_code: string;

  @Column()
  city: string;

  @ManyToOne(() => User, (user: User) => user.stores)
  user: User;
}
