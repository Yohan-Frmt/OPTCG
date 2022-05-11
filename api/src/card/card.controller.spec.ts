import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';

describe('CardController', () => {
  let controller: CardController;
  const repositoryToken = getRepositoryToken(Card);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [
        CardService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardController>(CardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
