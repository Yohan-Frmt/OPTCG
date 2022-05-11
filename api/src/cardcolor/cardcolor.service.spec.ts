import { Test, TestingModule } from '@nestjs/testing';
import { CardColorService } from './cardcolor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardColor } from './cardcolor.entity';

describe('CardColorService', () => {
  let service: CardColorService;
  const repositoryToken = getRepositoryToken(CardColor);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardColorService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CardColorService>(CardColorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
