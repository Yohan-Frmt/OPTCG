import { Test, TestingModule } from '@nestjs/testing';
import { CardRarityController } from './cardrarity.controller';
import { CardRarityService } from './cardrarity.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardRarity } from './cardrarity.entity';

describe('CardRarityController', () => {
  let controller: CardRarityController;
  const repositoryToken = getRepositoryToken(CardRarity);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardRarityController],
      providers: [
        CardRarityService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardRarityController>(CardRarityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
