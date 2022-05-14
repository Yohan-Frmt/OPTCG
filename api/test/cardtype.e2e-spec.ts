import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { CardTypeModule } from '../src/cardtype/cardtype.module';
import { CardType } from '../src/cardtype/cardtype.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { CardTypeService } from '../src/cardtype/cardtype.service';
import { CardTypeController } from '../src/cardtype/cardtype.controller';
import { randomUUID } from 'crypto';

describe('CardTypeController (e2e)', () => {
  let app: INestApplication;
  let controller: CardTypeController;
  let service: CardTypeService;
  let repository: Repository<CardType>;

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
      imports: [CardTypeModule, TypeOrmModule.forFeature([CardType])],
    })
      .overrideProvider(getRepositoryToken(CardType))
      .useValue(mockRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    repository = moduleRef.get(getRepositoryToken(CardType));
    service = new CardTypeService(repository);
    controller = new CardTypeController(service);
  });

  it('/cardtype (GET)', async () => {
    return request(app.getHttpServer())
      .get('/cardtype')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await service.findAll());
  });

  it('/cardtype (POST)', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardtype')
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

  it('/cardtype (POST) --> Validation Error en_name is empty', () => {
    const dto = {
      fr_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardtype')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name should not be empty');
      });
  });

  it('/cardtype (POST) --> Validation Error en_name is not a string', () => {
    const dto = {
      fr_name: 'test',
      en_name: 123,
    };
    return request(app.getHttpServer())
      .post('/cardtype')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name must be a string');
      });
  });

  it('/cardtype (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardtype')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name should not be empty');
      });
  });

  it('/cardtype (POST) --> Validation Error fr_name is not a string', () => {
    const dto = {
      fr_name: 123,
      en_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardtype')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name must be a string');
      });
  });
});
