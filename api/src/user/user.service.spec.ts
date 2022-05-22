import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { randomUUID } from 'crypto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserCountry } from '../usercountry/usercountry.entity';
import { UserRegion } from '../userregion/userregion.entity';
import { UserPronoun } from '../userpronoun/userpronoun.entity';

describe('UserService', () => {
  let service: UserService;
  const repositoryToken = getRepositoryToken(User);

  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((user) =>
      Promise.resolve({
        id: randomUUID(),
        ...user,
      }),
    ),
  };

  const country = new UserCountry();
  country.fr_name = 'France';
  country.en_name = 'France';
  country.iso_code = 'FR';

  const region = new UserRegion();
  region.fr_name = 'Auvergne-Rhône-Alpes';
  region.en_name = 'Auverne-Rhone-Alpes';

  const stores = [];

  const pronouns = new UserPronoun();
  pronouns.fr_name = 'il';
  pronouns.en_name = 'he';
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all users', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should create a new user', async () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      createdAt: new Date(),
      last_login: new Date(),
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
