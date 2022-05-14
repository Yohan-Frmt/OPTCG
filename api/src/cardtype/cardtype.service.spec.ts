import { Test, TestingModule } from '@nestjs/testing';
import { CardTypeService } from './cardtype.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardType } from './cardtype.entity';
import { randomUUID } from 'crypto';

describe('CardTypeService', () => {
  let service: CardTypeService;
  const repositoryToken = getRepositoryToken(CardType);
  const mockRepository = {
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
        CardTypeService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardTypeService>(CardTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
