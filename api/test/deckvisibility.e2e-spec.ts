import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { User } from '../src/user/user.entity';
import { DeckVisibility } from '../src/deckvisibility/deckvisibility.entity';
import { Repository } from 'typeorm';
import { EMPTY } from 'rxjs';
import { DeckVisibilityService } from '../src/deckvisibility/deckvisibility.service';
import { DeckVisibilityController } from '../src/deckvisibility/deckvisibility.controller';
import { DeckVisibilityRepository } from '../src/deckvisibility/deckvisibility.repository';
import { DeckVisibilityModule } from '../src/deckvisibility/deckvisibility.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let controller: DeckVisibilityController;
  let service: DeckVisibilityService;
  let repository: DeckVisibilityRepository;

  const spy = jest.spyOn(global, 'Date');

  const visibility = new DeckVisibility();
  visibility.en_name = "Public";
  visibility.fr_name = "Public";
  visibility.id = randomUUID();

  const mockRepository = {
    find: jest.fn(() => Promise.resolve([])),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DeckVisibilityModule],
    })
      .overrideProvider(getRepositoryToken(DeckVisibility))
      .useValue(mockRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    repository = moduleFixture.get(getRepositoryToken(DeckVisibility));
    service = new DeckVisibilityService(repository);
    controller = new DeckVisibilityController(service);
  });

  it('/deckvisibilities (GET)', async () => {
    return request(app.getHttpServer())
      .get('/deckvisibilities')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });
});
