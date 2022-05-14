import { Test, TestingModule } from '@nestjs/testing';
import { CardColorController } from './cardcolor.controller';
import { CardColorService } from './cardcolor.service';
import { randomUUID } from 'crypto';

describe('CardColorController', () => {
  let controller: CardColorController;

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
      controllers: [CardColorController],
      providers: [CardColorService],
    })
      .overrideProvider(CardColorService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardColorController>(CardColorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all colors', async () => {
    expect(await controller.findAll()).toEqual([]);
  });
  it('should create a new type', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      hex_color: '#ffffff',
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
