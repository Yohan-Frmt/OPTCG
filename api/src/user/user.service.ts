import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';
import { string } from 'yargs';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async create(user: UserDto): Promise<User> {    
    const saltRounds = 10;
    hash: string;
    user.password = await bcrypt.hash(user.password, saltRounds)
    const userCreated = await this.userRepository.create(user);
    return await this.userRepository.save(userCreated);
  }
}
