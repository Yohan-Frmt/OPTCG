import { Controller } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { randomUUID } from 'crypto';
import { DeckVisibilityController } from './deckvisibility.controller';
import { DeckVisibilityDto } from './deckvisibility.dto';
import { DeckVisibility } from './deckvisibility.entity';
import { DeckVisibilityService } from './deckvisibility.service';

describe('deck Controller', () => {
  let controller: DeckVisibilityController;
  const mockService = {
    findAll: jest.fn(() => Promise.resolve(new Array<DeckVisibilityDto>())),
    /*create: jest.fn((deckDto: DeckVisibilityDto) =>
      Promise.resolve({ id: randomUUID(), created_at: new Date(), updated_at: new Date(), ...deckDto }),
    ),*/
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeckVisibilityController],
      providers: [DeckVisibilityService],
    })
      .overrideProvider(DeckVisibilityService)
      .useValue(mockService)
      .compile();
    controller = module.get<DeckVisibilityController>(DeckVisibilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return list of DeckVisibility', async () => {
    expect(await controller.findAll()).toBeInstanceOf(Array);
  });
});
