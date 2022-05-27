import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegion } from './userregion.entity';
import { Repository } from 'typeorm';
import { UserRegionDto } from './userregion.dto';

@Injectable()
export class UserRegionService {
  constructor(
    @InjectRepository(UserRegion)
    private readonly repository: Repository<UserRegion>,
  ) {}

  public async findAll(): Promise<UserRegion[]> {
    return await this.repository.find();
  }

  public async create(userRegion: UserRegionDto): Promise<UserRegion> {
    const userPronounCreated = await this.repository.create(userRegion);
    return await this.repository.save(userPronounCreated);
  }
}
