import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CardTypeModule } from '../src/cards/cardtype/cardtype.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CardType } from '../src/cards/cardtype/cardtype.entity';
import { randomUUID } from 'crypto';

describe('CardTypeController (e2e)', () => {
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
      imports: [CardTypeModule],
    })
      .overrideProvider(getRepositoryToken(CardType))
      .useValue(mockRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cardtypes (GET)', () => {
    return request(app.getHttpServer())
      .get('/cardtypes')
      .expect('Content-type', /json/)
      .expect(200)
      .expect([]);
  });

  it('/cardtypes (POST)', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardtypes')
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

  it('/cardtypes (POST) --> Validation Error en_name is empty', () => {
    const dto = {
      fr_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardtypes')
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

  it('/cardtypes (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardtypes')
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
});
