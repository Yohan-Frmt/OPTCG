import { Test, TestingModule } from '@nestjs/testing';
import { CardStatusController } from './cardstatus.controller';
import { CardStatusService } from './cardstatus.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardStatus } from './cardstatus.entity';

describe('CardStatusController', () => {
  let controller: CardStatusController;
  const repositoryToken = getRepositoryToken(CardStatus);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardStatusController],
      providers: [
        CardStatusService,
        {
          provide: repositoryToken,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CardStatusController>(CardStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
