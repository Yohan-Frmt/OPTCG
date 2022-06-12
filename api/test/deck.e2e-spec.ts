import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { DeckController } from '../src/decks/deck/deck.controller';
import { UserPronoun } from '../src/users/userpronoun/userpronoun.entity';
import { User } from '../src/users/user/user.entity';
import { DeckModule } from '../src/decks/deck/deck.module';
import { UserRegion } from '../src/users/userregion/userregion.entity';
import { DeckService } from '../src/decks/deck/deck.service';
import { DeckVisibility } from '../src/decks/deckvisibility/deckvisibility.entity';
import { UserCountry } from '../src/users/usercountry/usercountry.entity';
import { Deck } from '../src/decks/deck/deck.entity';
import { DeckRepository } from '../src/decks/deck/deck.repository';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let controller: DeckController;
  let service: DeckService;
  let repository: DeckRepository;

  const spy = jest.spyOn(global, 'Date');

  const visibility = new DeckVisibility();
  visibility.en_name = 'Public';
  visibility.fr_name = 'Public';
  visibility.id = randomUUID();

  const country = new UserCountry();
  country.fr_name = 'France';
  country.en_name = 'France';
  country.iso_code = 'FR';

  const region = new UserRegion();
  region.fr_name = 'Auvergne-Rhône-Alpes';
  region.en_name = 'Auverne-Rhone-Alpes';

  const pronouns = new UserPronoun();
  pronouns.fr_name = 'il';
  pronouns.en_name = 'he';

  const user = new User();
  user.id = randomUUID();
  user.email = 'john.doe@gmail.com';
  user.username = 'jdoe';
  user.password = 'azerty12345';
  user.discord = 'jdoe#1234';
  user.country = country;
  user.region = region;
  user.stores = [];
  user.pronouns = [pronouns];
  user.created_at = new Date();
  user.last_login = new Date();

  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((dto) =>
      Promise.resolve({
        id: randomUUID(),
        created_at: new Date(),
        updated_at: new Date(),
        ...dto,
      }),
    ),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DeckModule],
    })
      .overrideProvider(getRepositoryToken(Deck))
      .useValue(mockRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    repository = moduleFixture.get(getRepositoryToken(Deck));
    service = new DeckService(repository);
    controller = new DeckController(service);
  });

  it('/decks (GET)', async () => {
    return request(app.getHttpServer())
      .get('/decks')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });

  it('/decks (POST) --> id should be a UUID string', () => {
    const dto = {
      name: 'DECKTEST1',
      content: '{}',
      visibility: visibility,
      description: 'description test',
    };
    return request(app.getHttpServer())
      .post('/decks')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.stringMatching(
            /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
          ),
          created_at: spy.mock.instances[0],
          updated_at: spy.mock.instances[0],
          ...dto,
        });
      });
  });

  it('/decks (POST) --> Validation Error name is empty', () => {
    const dto = {
      content: '{}',
      visibility: visibility,
      description: 'description test',
    };
    return request(app.getHttpServer())
      .post('/decks')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('name should not be empty');
      });
  });

  it('/decks (POST) --> Validation Error name is not a string', () => {
    const dto = {
      content: '{}',
      name: 123,
      visibility: visibility,
      description: 'description test',
    };
    return request(app.getHttpServer())
      .post('/decks')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('name must be a string');
      });
  });

  it('/decks (POST) --> Validation Error content is empty', () => {
    const dto = {
      name: 'DECKTEST1',
      visibility: visibility,
      description: 'description test',
    };
    return request(app.getHttpServer())
      .post('/decks')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('content should not be empty');
      });
  });

  it('/decks (POST) --> Validation Error content must be a json string', () => {
    const dto = {
      name: 'DECKTEST1',
      content: 'aaa',
      visibility: visibility,
      description: 'description test',
    };
    return request(app.getHttpServer())
      .post('/decks')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'content must be a json string',
        );
      });
  });

  it('/decks (POST) --> Validation Error content must be a string', () => {
    const dto = {
      name: 'DECKTEST1',
      content: 123,
      visibility: visibility,
      description: 'description test',
    };
    return request(app.getHttpServer())
      .post('/decks')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('content must be a string');
      });
  });

  it('/decks (POST) --> Validation Error visibility must be an object', () => {
    const dto = {
      name: 'DECKTEST1',
      content: '{}',
      description: 'description test',
    };
    return request(app.getHttpServer())
      .post('/decks')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('visibility must be an object');
      });
  });

  it('/decks (POST) --> Validation Error description must a string', () => {
    const dto = {
      name: 'DECKTEST1',
      content: '{}',
      visibility: visibility,
    };
    return request(app.getHttpServer())
      .post('/decks')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('description must be a string');
      });
  });
});
