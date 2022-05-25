import { Test, TestingModule } from '@nestjs/testing';
import { UserPronounService } from './userpronoun.service';
import { randomUUID } from 'crypto';
import { UserPronoun } from './userpronoun.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserpronounService', () => {
  let service: UserPronounService;
  const repositoryToken = getRepositoryToken(UserPronoun);

  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((userPronoun) =>
      Promise.resolve({
        id: randomUUID(),
        ...userPronoun,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserPronounService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserPronounService>(UserPronounService);
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
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
