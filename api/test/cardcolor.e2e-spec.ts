import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CardColorModule } from '../src/cards/cardcolor/cardcolor.module';
import { CardColorController } from '../src/cards/cardcolor/cardcolor.controller';
import { CardColorService } from '../src/cards/cardcolor/cardcolor.service';
import { CardColor } from '../src/cards/cardcolor/cardcolor.entity';

describe('CardColorController (e2e)', () => {
  let app: INestApplication;
  let controller: CardColorController;
  let service: CardColorService;
  let repository: Repository<CardColor>;

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
      imports: [CardColorModule, TypeOrmModule.forFeature([CardColor])],
    })
      .overrideProvider(getRepositoryToken(CardColor))
      .useValue(mockRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    repository = moduleRef.get(getRepositoryToken(CardColor));
    service = new CardColorService(repository);
    controller = new CardColorController(service);
  });

  it('/cardcolors (GET)', async () => {
    return request(app.getHttpServer())
      .get('/cardcolors')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });

  it('/cardcolors (POST)', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      hex_color: '#ffffff',
    };
    return request(app.getHttpServer())
      .post('/cardcolors')
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

  it('/cardcolors (POST) --> Validation Error en_name is empty', () => {
    const dto = {
      fr_name: 'test',
      hex_color: '#ffffff',
    };
    return request(app.getHttpServer())
      .post('/cardcolors')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name should not be empty');
      });
  });

  it('/cardcolors (POST) --> Validation Error en_name is not a string', () => {
    const dto = {
      en_name: 123,
      fr_name: 'test',
      hex_color: '#ffffff',
    };
    return request(app.getHttpServer())
      .post('/cardcolors')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name must be a string');
      });
  });

  it('/cardcolors (POST) --> Validation Error fr_name is empty', () => {
    const dto = {
      en_name: 'test',
      hex_color: '#ffffff',
    };
    return request(app.getHttpServer())
      .post('/cardcolors')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name should not be empty');
      });
  });

  it('/cardcolors (POST) --> Validation Error fr_name is not a string', () => {
    const dto = {
      fr_name: 123,
      en_name: 'test',
      hex_color: '#ffffff',
    };
    return request(app.getHttpServer())
      .post('/cardcolors')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name must be a string');
      });
  });

  it('/cardcolors (POST) --> Validation Error hex_color is not a string', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      hex_color: 74,
    };
    return request(app.getHttpServer())
      .post('/cardcolors')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('hex_color must be a string');
      });
  });
  it('/cardcolors (POST) --> Validation Error hex_color is not a valid hex color', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      hex_color: 'hexColor',
    };
    return request(app.getHttpServer())
      .post('/cardcolors')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'hex_color must be a hexadecimal color',
        );
      });
  });
});
