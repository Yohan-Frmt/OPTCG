import { Test, TestingModule } from '@nestjs/testing';
import { randomUUID } from 'crypto';
import { UserRegionController } from './userregion.controller';
import { UserRegionService } from './userregion.service';

describe('UserRegionController', () => {
  let controller: UserRegionController;

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
      controllers: [UserRegionController],
      providers: [UserRegionService],
    })
      .overrideProvider(UserRegionService)
      .useValue(mockService)
      .compile();

    controller = module.get<UserRegionController>(UserRegionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all pronouns', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should create a new pronoun', async () => {
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
