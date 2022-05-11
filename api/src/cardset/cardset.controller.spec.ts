import { Test, TestingModule } from '@nestjs/testing';
import { CardSetService } from './cardset.service';
import { CardSetController } from './cardset.controller';

describe('CardSetController', () => {
  let controller: CardSetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardSetController],
      providers: [CardSetService],
    }).compile();

    controller = module.get<CardSetController>(CardSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
