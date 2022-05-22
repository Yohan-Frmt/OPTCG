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
      .get('/usercountries')
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
      .post('/usercountries')
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
      .post('/usercountries')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name should not be empty');
      });
  });

  it('/usercountry (POST) --> Validation Error en_name is not a string', () => {
    const dto = {
      fr_name: 'test',
      en_name: 123,
      iso_code: 'FR',
    };
    return request(app.getHttpServer())
      .post('/usercountries')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name must be a string');
      });
  });

  it('/usercountry (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
      iso_code: 'FR',
    };
    return request(app.getHttpServer())
      .post('/usercountries')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name should not be empty');
      });
  });

  it('/usercountry (POST) --> Validation Error fr_name is not a string', () => {
    const dto = {
      fr_name: 123,
      en_name: 'test',
      iso_code: 'FR',
    };
    return request(app.getHttpServer())
      .post('/usercountries')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name must be a string');
      });
  });

  it('/usercountry (POST) --> Validation Error iso_code is empty', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/usercountries')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('iso_code should not be empty');
      });
  });

  it('/usercountry (POST) --> Validation Error iso_code is not a string', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      iso_code: 123,
    };
    return request(app.getHttpServer())
      .post('/usercountries')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('iso_code must be a string');
      });
  });

  it('/usercountry (POST) --> Validation Error iso_code is empty', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      iso_code: 'SDF',
    };
    return request(app.getHttpServer())
      .post('/usercountries')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'iso_code must be a valid ISO31661 Alpha2 code',
        );
      });
  });
});
