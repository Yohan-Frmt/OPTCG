import { Test, TestingModule } from '@nestjs/testing';
import { CardRarityController } from './cardrarity.controller';
import { CardRarityService } from './cardrarity.service';
import { randomUUID } from 'crypto';

describe('CardRarityController', () => {
  let controller: CardRarityController;
  const mockService = {
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

  it('should create a new rarity', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
    };
    expect(await controller.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      fr_name: 'tester',
      en_name: 'test',
    });
  });
});
