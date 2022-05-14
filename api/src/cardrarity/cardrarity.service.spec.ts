import { Test, TestingModule } from '@nestjs/testing';
import { CardRarityService } from './cardrarity.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardRarity } from './cardrarity.entity';

describe('CardRarityService', () => {
  let service: CardRarityService;
  const repositoryToken = getRepositoryToken(CardRarity);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardRarityService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CardRarityService>(CardRarityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
