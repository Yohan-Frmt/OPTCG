import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCountryDto } from './usercountry.dto';
import { UserCountry } from './usercountry.entity';

@Injectable()
export class UserCountryService {
  constructor(
    @InjectRepository(UserCountry)
    private readonly repository: Repository<UserCountry>,
  ) {}

  public async findAll(): Promise<UserCountry[]> {
    return await this.repository.find();
  }

  public async create(userPronoun: UserCountryDto): Promise<UserCountry> {
    const userPronounCreated = await this.repository.create(userPronoun);
    return await this.repository.save(userPronounCreated);
  }
}
