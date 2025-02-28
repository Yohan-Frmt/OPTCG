import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CardRarityModule } from '../src/cards/cardrarity/cardrarity.module';
import { CardRarityController } from '../src/cards/cardrarity/cardrarity.controller';
import { CardRarityService } from '../src/cards/cardrarity/cardrarity.service';
import { CardRarity } from '../src/cards/cardrarity/cardrarity.entity';

describe('CardRarityController (e2e)', () => {
  let app: INestApplication;
  let controller: CardRarityController;
  let service: CardRarityService;
  let repository: Repository<CardRarity>;

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
      imports: [CardRarityModule, TypeOrmModule.forFeature([CardRarity])],
    })
      .overrideProvider(getRepositoryToken(CardRarity))
      .useValue(mockRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    repository = moduleRef.get(getRepositoryToken(CardRarity));
    service = new CardRarityService(repository);
    controller = new CardRarityController(service);
  });

  it('/cardrarities (GET)', async () => {
    return request(app.getHttpServer())
      .get('/cardrarities')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });

  it('/cardrarities (POST)', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      abbr: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardrarities')
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

  it('/cardrarities (POST) --> Validation Error en_name is empty', () => {
    const dto = {
      fr_name: 'test',
      abbr: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardrarities')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name should not be empty');
      });
  });

  it('/cardrarities (POST) --> Validation Error en_name is not a string', () => {
    const dto = {
      fr_name: 'test',
      en_name: 123,
      abbr: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardrarities')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name must be a string');
      });
  });

  it('/cardrarities (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
      abbr: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardrarities')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name should not be empty');
      });
  });

  it('/cardrarities (POST) --> Validation Error fr_name is not a string', () => {
    const dto = {
      fr_name: 123,
      en_name: 'test',
      abbr: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardrarities')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name must be a string');
      });
  });

  it('/cardrarities (POST) --> Validation Error abbr is empty', () => {
    const dto = {
      en_name: 'test',
      fr_name: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardrarities')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('abbr should not be empty');
      });
  });

  it('/cardrarities (POST) --> Validation Error abbr is not a string', () => {
    const dto = {
      fr_name: 123,
      en_name: 'test',
      abbr: 123,
    };
    return request(app.getHttpServer())
      .post('/cardrarities')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('abbr must be a string');
      });
  });
});
