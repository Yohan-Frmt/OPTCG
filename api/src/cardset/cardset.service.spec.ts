import { Test, TestingModule } from '@nestjs/testing';
import { CardSetService } from './cardset.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardSet } from './cardset.entity';

describe('CardSetService', () => {
  let service: CardSetService;
  const repositoryToken = getRepositoryToken(CardSet);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardSetService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CardSetService>(CardSetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
