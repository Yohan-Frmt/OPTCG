import { Test, TestingModule } from '@nestjs/testing';
import { CardErrataService } from './carderrata.service';
import { CardErrataController } from './carderrata.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardErrata } from './carderrata.entity';

describe('CardErrataController', () => {
  let controller: CardErrataController;
  const repositoryToken = getRepositoryToken(CardErrata);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardErrataController],
      providers: [
        CardErrataService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardErrataController>(CardErrataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
