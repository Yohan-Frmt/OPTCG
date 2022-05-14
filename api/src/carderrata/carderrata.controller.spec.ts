import { Test, TestingModule } from '@nestjs/testing';
import { CardErrataService } from './carderrata.service';
import { CardErrataController } from './carderrata.controller';
import { randomUUID } from 'crypto';

describe('CardErrataController', () => {
  let controller: CardErrataController;

  const mockService = {
    findAll: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => {
      return {
        id: randomUUID(),
        date: new Date(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardErrataController],
      providers: [CardErrataService],
    })
      .overrideProvider(CardErrataService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardErrataController>(CardErrataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all errata', async () => {
    expect(await controller.findAll()).toEqual([]);
  });
  it('should create a new type', async () => {
    const dto = {
      description: 'tester',
      card: null,
    };
    expect(await controller.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      date: expect.any(Date),
      ...dto,
    });
  });
});
