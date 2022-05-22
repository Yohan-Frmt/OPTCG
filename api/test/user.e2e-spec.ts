import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { User } from '../src/user/user.entity';
import { UserModule } from '../src/user/user.module';
import { UserCountry } from '../src/usercountry/usercountry.entity';
import { UserRegion } from '../src/userregion/userregion.entity';
import { UserPronoun } from '../src/userpronoun/userpronoun.entity';
import { UserStore } from '../src/userstore/userstore.entity';
import { UserService } from '../src/user/user.service';
import { UserController } from '../src/user/user.controller';
import { Repository } from 'typeorm';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let controller: UserController;
  let service: UserService;
  let repository: Repository<User>;

  const spy = jest.spyOn(global, 'Date');

  const country = new UserCountry();
  country.fr_name = 'France';
  country.en_name = 'France';
  country.iso_code = 'FR';

  const region = new UserRegion();
  region.fr_name = 'Auvergne-Rhône-Alpes';
  region.en_name = 'Auverne-Rhone-Alpes';

  const stores = [];
  const nestores = new UserStore();
  nestores.address1 = '10 Rue Robert Doisneau';
  nestores.address2 = '';
  nestores.zip_code = '16000';
  nestores.city = 'Angoulême';

  const pronouns = new UserPronoun();
  pronouns.fr_name = 'il';
  pronouns.en_name = 'he';

  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
    create: jest.fn((dto) => dto),
    save: jest.fn((dto) =>
      Promise.resolve({
        id: randomUUID(),
        createdAt: new Date(),
        last_login: new Date(),
        ...dto,
      }),
    ),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(getRepositoryToken(User))
      .useValue(mockRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    repository = moduleFixture.get(getRepositoryToken(User));
    service = new UserService(repository);
    controller = new UserController(service);
  });

  it('/user (GET)', async () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });

  it('/user (POST) with no store', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.stringMatching(
            /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
          ),
          createdAt: spy.mock.instances[0],
          last_login: spy.mock.instances[0],
          ...dto,
        });
      });
  });

  it('/user (POST) --> Validation Error email is empty', () => {
    const dto = {
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('email should not be empty');
      });
  });

  it('/user (POST) --> Validation Error email is not a string', () => {
    const dto = {
      email: 123,
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('email must be a string');
      });
  });

  it('/user (POST) --> Validation Error username is empty', () => {
    const dto = {
      email: 'john@Doe.com',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('username should not be empty');
      });
  });

  it('/user (POST) --> Validation Error username is not a string', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 123,
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('username must be a string');
      });
  });

  it('/user (POST) --> Validation Error password is empty', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('password should not be empty');
      });
  });

  it('/user (POST) --> Validation Error password is not a string', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: 123456,
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('password must be a string');
      });
  });

  it('/user (POST) --> Validation Error isActive is not a boolean', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: 'true',
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'isActive must be a boolean value',
        );
      });
  });

  it('/user (POST) --> Validation isActive is default to true', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.stringMatching(
            /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
          ),
          createdAt: spy.mock.instances[0],
          last_login: spy.mock.instances[0],
          isActive: true,
          ...dto,
        });
      });
  });

  it('/user (POST) --> Validation Error discord is empty', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('discord should not be empty');
      });
  });

  it('/user (POST) --> Validation Error discord is not a string', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 1234,
      isStore: false,
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('discord must be a string');
      });
  });

  it('/user (POST) --> Validation Error isStore is not a boolean', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: 'false',
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'isStore must be a boolean value',
        );
      });
  });

  it('/user (POST) --> Validation Error isStore is default to false', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      country,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.stringMatching(
            /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
          ),
          createdAt: spy.mock.instances[0],
          last_login: spy.mock.instances[0],
          isStore: false,
          ...dto,
        });
      });
  });

  it('/user (POST) --> Validation Error country is not defined', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'country should not be null or undefined',
        );
      });
  });

  it('/user (POST) --> Validation Error country is not a DTO', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country: 'France',
      region,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'country.each value in nested property country must be either object or array',
        );
      });
  });

  it('/user (POST) --> Validation Error region is not defined', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'region should not be null or undefined',
        );
      });
  });

  it('/user (POST) --> Validation Error region is not a DTO', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region: 'Ile de France',
      stores,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'region.each value in nested property region must be either object or array',
        );
      });
  });

  it('/user (POST) --> Validation Error stores is not defined', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'stores should not be null or undefined',
        );
      });
  });

  it('/user (POST) --> Validation Error stores is not a DTO', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores: 'stores',
      pronouns: [pronouns],
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'stores.each value in nested property stores must be either object or array',
        );
      });
  });

  it('/user (POST) --> Validation Error pronouns is not defined', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'pronouns should not be null or undefined',
        );
      });
  });

  it('/user (POST) --> Validation Error pronouns is not a DTO', () => {
    const dto = {
      email: 'john@Doe.com',
      username: 'John',
      password: '123456',
      isActive: true,
      discord: 'John#1234',
      isStore: false,
      country,
      region,
      stores,
      pronouns: 'pronouns',
    };
    return request(app.getHttpServer())
      .post('/user')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'pronouns.each value in nested property pronouns must be either object or array',
        );
      });
  });
});
