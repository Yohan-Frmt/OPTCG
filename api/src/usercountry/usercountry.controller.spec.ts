import { Test, TestingModule } from '@nestjs/testing';
import { randomUUID } from 'crypto';
import { UserCountryController } from './usercountry.controller';
import { UserCountryService } from './usercountry.service';

describe('UserCountryController', () => {
  let controller: UserCountryController;

  const mockService = {
    findAll: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => Promise.resolve({ id: randomUUID(), ...dto })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCountryController],
      providers: [UserCountryService],
    })
      .overrideProvider(UserCountryService)
      .useValue(mockService)
      .compile();

    controller = module.get<UserCountryController>(UserCountryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all countries', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should create a new country', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      iso_code: 'FR',
    };
    expect(await controller.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      fr_name: 'tester',
      en_name: 'test',
      iso_code: 'FR',
    });
  });
});
