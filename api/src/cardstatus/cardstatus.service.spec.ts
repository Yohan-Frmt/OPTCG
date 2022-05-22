import { Test, TestingModule } from '@nestjs/testing';
import { CardStatusService } from './cardstatus.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardStatus } from './cardstatus.entity';
import { randomUUID } from 'crypto';

describe('CardStatusService', () => {
  let service: CardStatusService;
  const repositoryToken = getRepositoryToken(CardStatus);
  const mockRepository = {
    create: jest.fn((dto) => dto),
    save: jest.fn((cardStatus) =>
      Promise.resolve({
        id: randomUUID(),
        ...cardStatus,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardStatusService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardStatusService>(CardStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new card status', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      max_amount: 1,
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
