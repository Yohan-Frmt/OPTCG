import { Test, TestingModule } from '@nestjs/testing';
import { CardTypeService } from './cardtype.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardType } from './cardtype.entity';

describe('CardTypeService', () => {
  let service: CardTypeService;
  const repositoryToken = getRepositoryToken(CardType);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardTypeService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CardTypeService>(CardTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
