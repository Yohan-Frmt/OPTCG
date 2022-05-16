import { Test, TestingModule } from '@nestjs/testing';
import { UserCountryService } from './usercountry.service';
import { randomUUID } from 'crypto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserCountry } from './usercountry.entity';

describe('UserCountryService', () => {
  let service: UserCountryService;
  const repositoryToken = getRepositoryToken(UserCountry);

  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((userCountry) =>
      Promise.resolve({
        id: randomUUID(),
        ...userCountry,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserCountryService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserCountryService>(UserCountryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all pronouns', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should create a new pronoun', async () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      iso_code: 'FR',
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
