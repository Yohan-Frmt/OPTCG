import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { randomUUID } from 'crypto';

describe('UserController', () => {
  let controller: UserController;

  const mockService = {
    findAll: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) =>
      Promise.resolve({
        id: randomUUID(),
        ...dto,
      }),
    ),
  };

  // const country = new UserCountry();
  // country.fr_name = 'France';
  // country.en_name = 'France';
  // country.iso_code = 'FR';
  //
  // const region = new UserRegion();
  // region.fr_name = 'Auvergne-Rhône-Alpes';
  // region.en_name = 'Auverne-Rhone-Alpes';
  //
  // const stores = [];
  //
  // const pronouns = new UserPronoun();
  // pronouns.fr_name = 'il';
  // pronouns.en_name = 'he';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all users', async () => {
    expect(await controller.findAll()).toEqual([]);
  });
  //
  // it('should create a new user', async () => {
  //   const dto = {
  //     email: 'john@Doe.com',
  //     username: 'John',
  //     password: '123456',
  //     isActive: true,
  //     discord: 'John#1234',
  //     isStore: false,
  //     createdAt: new Date(),
  //     last_login: new Date(),
  //     country,
  //     region,
  //     stores,
  //     pronouns: [pronouns],
  //   };
  //   expect(await controller.create(dto)).toEqual({
  //     id: expect.stringMatching(
  //       /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
  //     ),
  //     email: 'john@Doe.com',
  //     username: 'John',
  //     password: '123456',
  //     isActive: true,
  //     discord: 'John#1234',
  //     isStore: false,
  //     createdAt: expect.any(Date),
  //     last_login: expect.any(Date),
  //     country: {
  //       fr_name: 'France',
  //       en_name: 'France',
  //       iso_code: 'FR',
  //     },
  //     region: {
  //       fr_name: 'Auvergne-Rhône-Alpes',
  //       en_name: 'Auverne-Rhone-Alpes',
  //     },
  //     stores: [],
  //     pronouns: [
  //       {
  //         fr_name: 'il',
  //         en_name: 'he',
  //       },
  //     ],
  //   });
  // });
});
