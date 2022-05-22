import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CardImageController } from '../src/cardimage/cardimage.controller';
import { CardImageService } from '../src/cardimage/cardimage.service';
import { CardImage } from '../src/cardimage/cardimage.entity';
import { CardImageModule } from '../src/cardimage/cardimage.module';

describe('CardImageController (e2e)', () => {
  let app: INestApplication;
  let controller: CardImageController;
  let service: CardImageService;
  let repository: Repository<CardImage>;

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
      imports: [CardImageModule, TypeOrmModule.forFeature([CardImage])],
    })
      .overrideProvider(getRepositoryToken(CardImage))
      .useValue(mockRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    repository = moduleRef.get(getRepositoryToken(CardImage));
    service = new CardImageService(repository);
    controller = new CardImageController(service);
  });

  it('/cardimages (GET)', async () => {
    return request(app.getHttpServer())
      .get('/cardimages')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });

  it('/cardimages (POST)', () => {
    const dto = {
      path: 'test',
    };
    return request(app.getHttpServer())
      .post('/cardimages')
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

  it('/cardimages (POST) --> Validation Error path is empty', () => {
    const dto = {};
    return request(app.getHttpServer())
      .post('/cardimages')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('path should not be empty');
      });
  });

  it('/cardimages (POST) --> Validation Error path is not a string', () => {
    const dto = {
      path: 123,
    };
    return request(app.getHttpServer())
      .post('/cardimages')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('path must be a string');
      });
  });
});
