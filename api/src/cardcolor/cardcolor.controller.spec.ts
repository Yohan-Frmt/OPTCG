import { Test, TestingModule } from '@nestjs/testing';
import { CardColorController } from './cardcolor.controller';
import { CardColorService } from './cardcolor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardColor } from './cardcolor.entity';

describe('CardColorController', () => {
  let controller: CardColorController;
  const repositoryToken = getRepositoryToken(CardColor);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardColorController],
      providers: [
        CardColorService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardColorController>(CardColorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
