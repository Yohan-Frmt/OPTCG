import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPronoun } from './userpronoun.entity';
import { Repository } from 'typeorm';
import { UserPronounDto } from './userpronoun.dto';

@Injectable()
export class UserPronounService {
  constructor(
    @InjectRepository(UserPronoun)
    private readonly repository: Repository<UserPronoun>,
  ) {}

  public async findAll(): Promise<UserPronoun[]> {
    return await this.repository.find();
  }

  public async create(userPronoun: UserPronounDto): Promise<UserPronoun> {
    const userPronounCreated = await this.repository.create(userPronoun);
    return await this.repository.save(userPronounCreated);
  }
}
