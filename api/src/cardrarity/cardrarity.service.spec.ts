import { Test, TestingModule } from '@nestjs/testing';
import { CardRarityService } from './cardrarity.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardRarity } from './cardrarity.entity';
import { randomUUID } from 'crypto';

describe('CardRarityService', () => {
  let service: CardRarityService;
  const repositoryToken = getRepositoryToken(CardRarity);
  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((cardType) =>
      Promise.resolve({
        id: randomUUID(),
        ...cardType,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardRarityService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardRarityService>(CardRarityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all rarities', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should create a new card type', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      cards: [],
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
