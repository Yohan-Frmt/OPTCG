import { Test, TestingModule } from '@nestjs/testing';
import { CardColorService } from './cardcolor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardColor } from './cardcolor.entity';
import { randomUUID } from 'crypto';

describe('CardColorService', () => {
  let service: CardColorService;
  const repositoryToken = getRepositoryToken(CardColor);
  const mockRepository = {
    create: jest.fn((dto) => dto),
    save: jest.fn((cardColor) =>
      Promise.resolve({
        id: randomUUID(),
        ...cardColor,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardColorService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardColorService>(CardColorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new card color', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      hex_color: '#ffffff',
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
