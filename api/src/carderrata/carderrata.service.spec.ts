import { Test, TestingModule } from '@nestjs/testing';
import { CardErrataService } from './carderrata.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardErrata } from './carderrata.entity';

describe('CardErrataService', () => {
  let service: CardErrataService;
  const repositoryToken = getRepositoryToken(CardErrata);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardErrataService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CardErrataService>(CardErrataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
