import { Controller } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { randomUUID } from 'crypto';
import { DeckVisibility } from '../deckvisibility/deckvisibility.entity';
import { DeckController } from './deck.controller';
import { DeckDto } from './deck.dto';
import { DeckService } from './deck.service';

describe('deck Controller', () => {
  let controller: DeckController;
  const mockService = {
    findAll: jest.fn(() => Promise.resolve(new Array<DeckDto>())),
    create: jest.fn((deckDto: DeckDto) =>
      Promise.resolve({ id: randomUUID(), created_at: new Date(), updated_at: new Date(), ...deckDto }),
    ),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeckController],
      providers: [DeckService],
    })
      .overrideProvider(DeckService)
      .useValue(mockService)
      .compile();
    controller = module.get<DeckController>(DeckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return list of Deck', async () => {
    expect(await controller.findAll()).toBeInstanceOf(Array);
    //expect(await controller.findAll()).not.toBe([]);
    //expect(await controller.findAll()[0]).toBeInstanceOf(DeckDto);
  });

  it('should return created object with a new id', async () => {
    const deckDto = {
      name: "name",
      author: {id: "IDAUTHOR"},
      content: "{}",
      visibility: new DeckVisibility(),
      description: "description"
    };
    expect(await controller.create(deckDto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i
      ),
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      name: "name",
      author: {id: "IDAUTHOR"},
      content: "{}",
      visibility: new DeckVisibility(),
      description: "description"
    });
  })
});
