import { Test, TestingModule } from '@nestjs/testing';
import { CardTagService } from './cardtag.service';
import { CardTagController } from './cardtag.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardTag } from './cardtag.entity';

describe('CardTagController', () => {
  let controller: CardTagController;
  const repositoryToken = getRepositoryToken(CardTag);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardTagController],
      providers: [
        CardTagService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardTagController>(CardTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
