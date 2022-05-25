import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CardSetModule } from '../src/cards/cardset/cardset.module';
import { CardSetService } from '../src/cards/cardset/cardset.service';
import { CardSetController } from '../src/cards/cardset/cardset.controller';
import { CardSet } from '../src/cards/cardset/cardset.entity';

describe('CardSetController (e2e)', () => {
  let app: INestApplication;
  let controller: CardSetController;
  let service: CardSetService;
  let repository: Repository<CardSet>;

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

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CardSetModule, TypeOrmModule.forFeature([CardSet])],
    })
      .overrideProvider(getRepositoryToken(CardSet))
      .useValue(mockRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    repository = moduleRef.get(getRepositoryToken(CardSet));
    service = new CardSetService(repository);
    controller = new CardSetController(service);
  });

  it('/cardsets (GET)', async () => {
    return request(app.getHttpServer())
      .get('/cardsets')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });

  it('/cardsets (POST)', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardsets')
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

  it('/cardsets (POST) --> Validation Error en_name is empty', () => {
    const dto = {
      fr_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardsets')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name should not be empty');
      });
  });

  it('/cardsets (POST) --> Validation Error en_name is not a string', () => {
    const dto = {
      fr_name: 'test',
      en_name: 123,
    };
    return request(app.getHttpServer())
      .post('/cardsets')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name must be a string');
      });
  });

  it('/cardsets (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardsets')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name should not be empty');
      });
  });

  it('/cardsets (POST) --> Validation Error fr_name is not a string', () => {
    const dto = {
      fr_name: 123,
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardsets')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name must be a string');
      });
  });
});
