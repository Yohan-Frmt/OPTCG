import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { UserStoreModule } from '../src/userstore/userstore.module';
import { UserStore } from '../src/userstore/userstore.entity';

describe('UserStoreController (e2e)', () => {
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
      imports: [UserStoreModule],
    })
      .overrideProvider(getRepositoryToken(UserStore))
      .useValue(mockRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/userstore (GET)', () => {
    return request(app.getHttpServer())
      .get('/userstore')
      .expect('Content-type', /json/)
      .expect(200)
      .expect([]);
  });

  it('/userstore (POST)', () => {
    const dto = {
      address1: 'test',
      address2: 'test',
      zip_code: 'test',
      city: 'test',
    };
    return request(app.getHttpServer())
      .post('/userstore')
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

  it('/userstore (POST) --> Validation Error address1 is empty', () => {
    const dto = {
      address2: 'test',
      zip_code: 'test',
      city: 'test',
    };
    return request(app.getHttpServer())
      .post('/userstore')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('address1 should not be empty');
      });
  });

  it('/userstore (POST) --> Validation address2 is optional', () => {
    const dto = {
      address1: 'test',
      zip_code: 'test',
      city: 'test',
    };
    return request(app.getHttpServer())
      .post('/userstore')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(201);
  });

  it('/userstore (POST) --> Validation Error zip_code is empty', () => {
    const dto = {
      address1: 'test',
      address2: 'test',
      city: 'test',
    };
    return request(app.getHttpServer())
      .post('/userstore')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('zip_code should not be empty');
      });
  });
  it('/userstore (POST) --> Validation Error city is empty', () => {
    const dto = {
      address1: 'test',
      address2: 'test',
      zip_code: 'test',
    };
    return request(app.getHttpServer())
      .post('/userstore')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('city should not be empty');
      });
  });

  it('/userstore (POST) --> Validation Error address1 is not a string', () => {
    const dto = {
      address1: 123,
      address2: 'test',
      zip_code: 'test',
      city: 'test',
    };
    return request(app.getHttpServer())
      .post('/userstore')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('address1 must be a string');
      });
  });

  it('/userstore (POST) --> Validation Error address2 is not a string', () => {
    const dto = {
      address1: 'test',
      address2: 123,
      zip_code: 'test',
      city: 'test',
    };
    return request(app.getHttpServer())
      .post('/userstore')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('address2 must be a string');
      });
  });

  it('/userstore (POST) --> Validation Error zip_code is not a string', () => {
    const dto = {
      address1: 'test',
      address2: 'test',
      zip_code: 123,
      city: 'test',
    };
    return request(app.getHttpServer())
      .post('/userstore')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('zip_code must be a string');
      });
  });
  it('/userstore (POST) --> Validation Error city is not a string', () => {
    const dto = {
      address1: 'test',
      address2: 'test',
      zip_code: 'test',
      city: 123,
    };
    return request(app.getHttpServer())
      .post('/userstore')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('city must be a string');
      });
  });
});
