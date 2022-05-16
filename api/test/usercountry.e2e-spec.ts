import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { UserCountryModule } from '../src/usercountry/usercountry.module';
import { UserCountry } from '../src/usercountry/usercountry.entity';

describe('UserCountryController (e2e)', () => {
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
      imports: [UserCountryModule],
    })
      .overrideProvider(getRepositoryToken(UserCountry))
      .useValue(mockRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/usercountry (GET)', () => {
    return request(app.getHttpServer())
      .get('/usercountry')
      .expect('Content-type', /json/)
      .expect(200)
      .expect([]);
  });

  it('/usercountry (POST)', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      iso_code: 'FR',
    };
    return request(app.getHttpServer())
      .post('/usercountry')
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

  it('/usercountry (POST) --> Validation Error en_name is empty', () => {
    const dto = {
      fr_name: 'test',
      iso_code: 'FR',
    };
    return request(app.getHttpServer())
      .post('/usercountry')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toEqual([
          'en_name should not be empty',
          'en_name must be a string',
        ]);
      });
  });

  it('/usercountry (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
      iso_code: 'FR',
    };
    return request(app.getHttpServer())
      .post('/usercountry')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toEqual([
          'fr_name should not be empty',
          'fr_name must be a string',
        ]);
      });
  });

  it('/usercountry (POST) --> Validation Error iso_code is empty', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/usercountry')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toEqual([
          'iso_code should not be empty',
          'iso_code must be a string',
        ]);
      });
  });
});
