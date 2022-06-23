import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public hash = async (password: string): Promise<string> =>
    bcrypt.hash(password, await bcrypt.genSalt(12));

  public compare = async (password: string, hash: string): Promise<boolean> =>
    bcrypt.compare(password, hash);

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async create(createUser: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = createUser.email;
    user.username = createUser.username;
    user.password = await this.hash(createUser.password);

    try {
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error(`User already exists with email ${user.email}`);
      }
      throw error;
    }
  }

  public async findById(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'username', 'password', 'isActive'],
    });
  }

  public async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { username },
      select: ['id', 'email', 'username', 'password', 'isActive'],
    });
  }
}
