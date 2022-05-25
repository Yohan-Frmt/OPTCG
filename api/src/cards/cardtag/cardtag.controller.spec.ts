import { Test, TestingModule } from '@nestjs/testing';
import { CardTagService } from './cardtag.service';
import { CardTagController } from './cardtag.controller';
import { randomUUID } from 'crypto';

describe('CardTagController', () => {
  let controller: CardTagController;

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
      controllers: [CardTagController],
      providers: [CardTagService],
    })
      .overrideProvider(CardTagService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardTagController>(CardTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new tag', async () => {
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
