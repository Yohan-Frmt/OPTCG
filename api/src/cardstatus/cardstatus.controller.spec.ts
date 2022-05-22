import { Test, TestingModule } from '@nestjs/testing';
import { CardStatusController } from './cardstatus.controller';
import { CardStatusService } from './cardstatus.service';
import { randomUUID } from 'crypto';

describe('CardStatusController', () => {
  let controller: CardStatusController;
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
      controllers: [CardStatusController],
      providers: [CardStatusService],
    })
      .overrideProvider(CardStatusService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardStatusController>(CardStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new status', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      max_amount: 1,
    };
    expect(await controller.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      fr_name: 'tester',
      en_name: 'test',
      max_amount: 1,
    });
  });
});
