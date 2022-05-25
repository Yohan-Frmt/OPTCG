import { Test, TestingModule } from '@nestjs/testing';
import { UserPronounController } from './userpronoun.controller';
import { randomUUID } from 'crypto';
import { UserPronounService } from './userpronoun.service';

describe('UserPronounController', () => {
  let controller: UserPronounController;

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
      controllers: [UserPronounController],
      providers: [UserPronounService],
    })
      .overrideProvider(UserPronounService)
      .useValue(mockService)
      .compile();

    controller = module.get<UserPronounController>(UserPronounController);
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
