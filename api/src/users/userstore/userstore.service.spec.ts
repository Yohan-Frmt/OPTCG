import { Test, TestingModule } from '@nestjs/testing';
import { UserStoreService } from './userstore.service';
import { randomUUID } from 'crypto';
import { UserStore } from './userstore.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserStoreService', () => {
  let service: UserStoreService;
  const repositoryToken = getRepositoryToken(UserStore);

  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((userStore) =>
      Promise.resolve({
        id: randomUUID(),
        ...userStore,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserStoreService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserStoreService>(UserStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all stores', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should create a new store', async () => {
    const dto = {
      address1: 'tester',
      address2: 'test',
      zip_code: 'test',
      city: 'test',
    };
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});
