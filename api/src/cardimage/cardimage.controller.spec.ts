import { Test, TestingModule } from '@nestjs/testing';
import { CardImageService } from './cardimage.service';
import { CardImageController } from './cardimage.controller';
import { randomUUID } from 'crypto';

describe('CardImageController', () => {
  let controller: CardImageController;
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
      controllers: [CardImageController],
      providers: [CardImageService],
    })
      .overrideProvider(CardImageService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardImageController>(CardImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new image', async () => {
    const dto = {
      path: 'test',
    };
    expect(await controller.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      path: 'test',
    });
  });
});
