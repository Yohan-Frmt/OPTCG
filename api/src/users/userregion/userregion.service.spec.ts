import { Test, TestingModule } from '@nestjs/testing';
import { UserRegionService } from './userregion.service';
import { randomUUID } from 'crypto';
import { UserRegion } from './userregion.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserRegionService', () => {
  let service: UserRegionService;
  const repositoryToken = getRepositoryToken(UserRegion);

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
        UserRegionService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserRegionService>(UserRegionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all regions', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should create a new region', async () => {
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
