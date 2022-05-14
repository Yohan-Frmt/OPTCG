import { Test, TestingModule } from '@nestjs/testing';
import { CardTypeController } from './cardtype.controller';
import { CardTypeService } from './cardtype.service';
import { randomUUID } from 'crypto';

describe('CardTypeController', () => {
  let controller: CardTypeController;

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
      controllers: [CardTypeController],
      providers: [CardTypeService],
    })
      .overrideProvider(CardTypeService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardTypeController>(CardTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all type', async () => {
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
