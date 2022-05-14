import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { randomUUID } from 'crypto';

describe('CardController', () => {
  let controller: CardController;

  const mockService = {
    findAll: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => {
      return {
        id: randomUUID(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [CardService],
    })
      .overrideProvider(CardService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardController>(CardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all cards', async () => {
    expect(await controller.findAll()).toEqual([]);
  });
});
