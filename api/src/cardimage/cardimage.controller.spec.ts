import { Test, TestingModule } from '@nestjs/testing';
import { CardImageService } from './cardimage.service';
import { CardImageController } from './cardimage.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardImage } from './cardimage.entity';

describe('CardImageController', () => {
  let controller: CardImageController;
  const repositoryToken = getRepositoryToken(CardImage);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardImageController],
      providers: [
        CardImageService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardImageController>(CardImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
