import { Test, TestingModule } from '@nestjs/testing';
import { CardSetService } from './cardset.service';
import { CardSetController } from './cardset.controller';
import { randomUUID } from 'crypto';

describe('CardSetController', () => {
  let controller: CardSetController;
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

  it('should create a new set', async () => {
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
