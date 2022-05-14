import { Test, TestingModule } from '@nestjs/testing';
import { CardStatusService } from './cardstatus.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardStatus } from './cardstatus.entity';

describe('CardStatusService', () => {
  let service: CardStatusService;
  const repositoryToken = getRepositoryToken(CardStatus);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardStatusService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CardStatusService>(CardStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
