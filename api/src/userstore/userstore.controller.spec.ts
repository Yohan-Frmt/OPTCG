import { Test, TestingModule } from '@nestjs/testing';
import { UserStoreController } from './userstore.controller';
import { randomUUID } from 'crypto';
import { UserStoreService } from './userstore.service';

describe('UserStoreController', () => {
  let controller: UserStoreController;

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
      controllers: [UserStoreController],
      providers: [UserStoreService],
    })
      .overrideProvider(UserStoreService)
      .useValue(mockService)
      .compile();

    controller = module.get<UserStoreController>(UserStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all stores', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should create a new store', async () => {
    const dto = {
      address1: 'tester',
      address2: 'test',
      zip_code: '16000',
      city: 'test',
    };
    expect(await controller.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      address1: 'tester',
      address2: 'test',
      zip_code: '16000',
      city: 'test',
    });
  });
});
