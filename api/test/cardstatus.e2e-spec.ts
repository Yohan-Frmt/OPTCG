import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CardStatusController } from '../src/cardstatus/cardstatus.controller';
import { CardStatusService } from '../src/cardstatus/cardstatus.service';
import { CardStatusModule } from '../src/cardstatus/cardstatus.module';
import { CardStatus } from '../src/cardstatus/cardstatus.entity';

describe('CardStatusController (e2e)', () => {
  let app: INestApplication;
  let controller: CardStatusController;
  let service: CardStatusService;
  let repository: Repository<CardStatus>;

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
      imports: [CardStatusModule, TypeOrmModule.forFeature([CardStatus])],
    })
      .overrideProvider(getRepositoryToken(CardStatus))
      .useValue(mockRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    repository = moduleRef.get(getRepositoryToken(CardStatus));
    service = new CardStatusService(repository);
    controller = new CardStatusController(service);
  });

  it('/cardstatus (GET)', async () => {
    return request(app.getHttpServer())
      .get('/cardstatus')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await service.findAll());
  });

  it('/cardstatus (POST)', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      max_amount: 4,
    };
    return request(app.getHttpServer())
      .post('/cardstatus')
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

  it('/cardstatus (POST) --> Validation Error en_name is empty', () => {
    const dto = {
      fr_name: 'test',
      max_amount: 4,
    };
    return request(app.getHttpServer())
      .post('/cardstatus')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name should not be empty');
      });
  });

  it('/cardstatus (POST) --> Validation Error en_name is not a string', () => {
    const dto = {
      en_name: 123,
      fr_name: 'test',
      max_amount: 4,
    };
    return request(app.getHttpServer())
      .post('/cardstatus')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name must be a string');
      });
  });

  it('/cardstatus (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
      max_amount: 4,
    };
    return request(app.getHttpServer())
      .post('/cardstatus')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name should not be empty');
      });
  });

  it('/cardstatus (POST) --> Validation Error fr_name is not a string', () => {
    const dto = {
      fr_name: 123,
      en_name: 'test',
      max_amount: 4,
    };
    return request(app.getHttpServer())
      .post('/cardstatus')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name must be a string');
      });
  });

  it('/cardstatus (POST) --> Validation Error max_amount is not a number', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      max_amount: '8',
    };
    return request(app.getHttpServer())
      .post('/cardstatus')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'max_amount must be a number conforming to the specified constraints',
        );
      });
  });

  it('/cardstatus (POST) --> Validation Error max_amount is greater than 4', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      max_amount: 8,
    };
    return request(app.getHttpServer())
      .post('/cardstatus')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'max_amount must not be greater than 4',
        );
      });
  });

  it('/cardstatus (POST) --> Validation Er  ror max_amount is lower than 0', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      max_amount: -5,
    };
    return request(app.getHttpServer())
      .post('/cardstatus')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'max_amount must not be less than 0',
        );
      });
  });
});
