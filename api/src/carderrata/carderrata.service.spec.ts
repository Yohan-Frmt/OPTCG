import { Test, TestingModule } from '@nestjs/testing';
import { CardErrataService } from './carderrata.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardErrata } from './carderrata.entity';
import { randomUUID } from 'crypto';

describe('CardErrataService', () => {
  let service: CardErrataService;
  const repositoryToken = getRepositoryToken(CardErrata);
  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((cardType) =>
      Promise.resolve({
        id: randomUUID(),
        date: new Date(),
        ...cardType,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardErrataService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardErrataService>(CardErrataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all errata', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should create a new card errata', async () => {
    const dto = {
      description: 'tester',
      card: null,
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      date: expect.any(Date),
      ...dto,
    });
  });
});
