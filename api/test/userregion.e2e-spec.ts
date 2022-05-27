import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { UserRegionModule } from '../src/users/userregion/userregion.module';
import { UserRegion } from '../src/users/userregion/userregion.entity';

describe('UserRegionController (e2e)', () => {
  let app: INestApplication;

  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((dto) =>
      Promise.resolve({
        id: randomUUID(),
        ...dto,
      }),
    ),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserRegionModule],
    })
      .overrideProvider(getRepositoryToken(UserRegion))
      .useValue(mockRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/userregion (GET)', () => {
    return request(app.getHttpServer())
      .get('/userregions')
      .expect('Content-type', /json/)
      .expect(200)
      .expect([]);
  });

  it('/userregion (POST)', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/userregions')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.stringMatching(
            /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
          ),
          ...dto,
        });
      });
  });

  it('/userregion (POST) --> Validation Error en_name is empty', () => {
    const dto = {
      fr_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/userregions')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name should not be empty');
      });
  });

  it('/userregion (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/userregions')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name should not be empty');
      });
  });
  it('/userregion (POST) --> Validation Error en_name is not a string', () => {
    const dto = {
      fr_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/userregions')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name must be a string');
      });
  });

  it('/userregion (POST) --> Validation Error fr_name is not a string', () => {
    const dto = {
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/userregions')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name must be a string');
      });
  });
});
