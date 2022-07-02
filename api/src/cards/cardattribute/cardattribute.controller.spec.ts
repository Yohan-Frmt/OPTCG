import { Test, TestingModule } from '@nestjs/testing';
import { CardattributeController } from './cardattribute.controller';

describe('CardattributeController', () => {
  let controller: CardattributeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardattributeController],
    }).compile();

    controller = module.get<CardattributeController>(CardattributeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
