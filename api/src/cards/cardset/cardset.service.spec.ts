import { Test, TestingModule } from '@nestjs/testing';
import { CardSetService } from './cardset.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardSet } from './cardset.entity';
import { randomUUID } from 'crypto';

describe('CardSetService', () => {
  let service: CardSetService;
  const repositoryToken = getRepositoryToken(CardSet);
  const mockRepository = {
    create: jest.fn((dto) => dto),
    save: jest.fn((cardSet) =>
      Promise.resolve({
        id: randomUUID(),
        ...cardSet,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardSetService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardSetService>(CardSetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new card set', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
