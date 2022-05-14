import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { randomUUID } from 'crypto';

describe('CardService', () => {
  let service: CardService;
  const repositoryToken = getRepositoryToken(Card);
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
        CardService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardService>(CardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all cards', async () => {
    expect(await service.findAll()).toEqual([]);
  });
});
