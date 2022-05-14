import { Test, TestingModule } from '@nestjs/testing';
import { CardSetService } from './cardset.service';
import { CardSetController } from './cardset.controller';
import { randomUUID } from 'crypto';

describe('CardSetController', () => {
  let controller: CardSetController;

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
      controllers: [CardSetController],
      providers: [CardSetService],
    })
      .overrideProvider(CardSetService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardSetController>(CardSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all set', async () => {
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
