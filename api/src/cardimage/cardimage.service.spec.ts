import { Test, TestingModule } from '@nestjs/testing';
import { CardImageService } from './cardimage.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardImage } from './cardimage.entity';

describe('CardImageService', () => {
  let service: CardImageService;
  const repositoryToken = getRepositoryToken(CardImage);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardImageService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CardImageService>(CardImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
