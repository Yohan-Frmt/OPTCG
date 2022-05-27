import { Test, TestingModule } from '@nestjs/testing';
import { CardTagService } from './cardtag.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardTag } from './cardtag.entity';
import { randomUUID } from 'crypto';

describe('CardTagService', () => {
  let service: CardTagService;
  const repositoryToken = getRepositoryToken(CardTag);

  const mockRepository = {
    create: jest.fn((dto) => dto),
    save: jest.fn((cardTag) =>
      Promise.resolve({
        id: randomUUID(),
        ...cardTag,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardTagService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardTagService>(CardTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new card tag', async () => {
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
