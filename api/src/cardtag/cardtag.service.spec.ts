import { Test, TestingModule } from '@nestjs/testing';
import { CardTagService } from './cardtag.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardTag } from './cardtag.entity';

describe('CardTagService', () => {
  let service: CardTagService;
  const repositoryToken = getRepositoryToken(CardTag);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardTagService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CardTagService>(CardTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
