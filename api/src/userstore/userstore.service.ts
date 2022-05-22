import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserStore } from './userstore.entity';
import { Repository } from 'typeorm';
import { UserStoreDto } from './userstore.dto';

@Injectable()
export class UserStoreService {
  constructor(
    @InjectRepository(UserStore)
    private readonly repository: Repository<UserStore>,
  ) {}

  public async findAll(): Promise<UserStore[]> {
    return await this.repository.find();
  }

  public async create(userStore: UserStoreDto): Promise<UserStore> {
    const userStoreCreated = await this.repository.create(userStore);
    return await this.repository.save(userStoreCreated);
  }
}
