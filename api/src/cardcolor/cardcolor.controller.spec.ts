import { Test, TestingModule } from '@nestjs/testing';
import { CardColorController } from './cardcolor.controller';
import { CardColorService } from './cardcolor.service';

describe('CardColorController', () => {
  let controller: CardColorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardColorController],
      providers: [CardColorService],
    }).compile();

    controller = module.get<CardColorController>(CardColorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
