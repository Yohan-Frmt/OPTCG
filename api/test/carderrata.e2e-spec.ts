import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CardErrataController } from '../src/cards/carderrata/carderrata.controller';
import { CardErrataService } from '../src/cards/carderrata/carderrata.service';
import { CardErrataModule } from '../src/cards/carderrata/carderrata.module';
import { CardErrata } from '../src/cards/carderrata/carderrata.entity';

describe('CardErrataController (e2e)', () => {
  let app: INestApplication;
  let controller: CardErrataController;
  let service: CardErrataService;
  let repository: Repository<CardErrata>;

  const spy = jest.spyOn(global, 'Date');
  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((dto) =>
      Promise.resolve({
        id: randomUUID(),
        date: new Date(),
        ...dto,
      }),
    ),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CardErrataModule, TypeOrmModule.forFeature([CardErrata])],
    })
      .overrideProvider(getRepositoryToken(CardErrata))
      .useValue(mockRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    repository = moduleRef.get(getRepositoryToken(CardErrata));
    service = new CardErrataService(repository);
    controller = new CardErrataController(service);
  });

  it('/carderrata (GET)', async () => {
    return request(app.getHttpServer())
      .get('/carderrata')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });

  it('/carderrata (POST)', () => {
    const dto = {
      description: 'test',
    };
    return request(app.getHttpServer())
      .post('/carderrata')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.stringMatching(
            /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
          ),
          date: spy.mock.instances[0],
          ...dto,
        });
      });
  });

  it('/cardtype (POST) --> Validation Error description is empty', () => {
    const dto = {};
    return request(app.getHttpServer())
      .post('/carderrata')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'description should not be empty',
        );
      });
  });

  it('/carderrata (POST) --> Validation Error description is not a string', () => {
    const dto = {
      description: 123,
    };
    return request(app.getHttpServer())
      .post('/carderrata')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('description must be a string');
      });
  });
});
