import { Test, TestingModule } from '@nestjs/testing';
import { CardImageService } from './cardimage.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardImage } from './cardimage.entity';
import { randomUUID } from 'crypto';

describe('CardImageService', () => {
  let service: CardImageService;
  const repositoryToken = getRepositoryToken(CardImage);
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
        CardImageService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardImageService>(CardImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all images', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should create a new card image', async () => {
    const dto = {
      path: 'tester',
      card: null,
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
