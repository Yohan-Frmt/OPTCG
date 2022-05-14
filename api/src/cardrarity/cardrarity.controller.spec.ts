import { Test, TestingModule } from '@nestjs/testing';
import { CardRarityController } from './cardrarity.controller';
import { CardRarityService } from './cardrarity.service';
import { randomUUID } from 'crypto';

describe('CardRarityController', () => {
  let controller: CardRarityController;

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
      controllers: [CardRarityController],
      providers: [CardRarityService],
    })
      .overrideProvider(CardRarityService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardRarityController>(CardRarityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all rarities', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should create a new type', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      cards: [],
    };
    expect(await controller.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
