import { Test, TestingModule } from '@nestjs/testing';
import { CardTypeController } from './cardtype.controller';
import { CardTypeService } from './cardtype.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardType } from './cardtype.entity';

describe('CardTypeController', () => {
  let controller: CardTypeController;
  const repositoryToken = getRepositoryToken(CardType);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardTypeController],
      providers: [
        CardTypeService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardTypeController>(CardTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
