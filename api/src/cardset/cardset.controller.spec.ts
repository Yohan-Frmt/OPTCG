import { Test, TestingModule } from '@nestjs/testing';
import { CardSetService } from './cardset.service';
import { CardSetController } from './cardset.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardSet } from './cardset.entity';

describe('CardSetController', () => {
  let controller: CardSetController;
  const repositoryToken = getRepositoryToken(CardSet);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardSetController],
      providers: [
        CardSetService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardSetController>(CardSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
