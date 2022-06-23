import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { DeckVisibilityModule } from '../src/decks/deckvisibility/deckvisibility.module';
import { DeckVisibilityController } from '../src/decks/deckvisibility/deckvisibility.controller';
import { DeckVisibility } from '../src/decks/deckvisibility/deckvisibility.entity';
import { DeckVisibilityService } from '../src/decks/deckvisibility/deckvisibility.service';
import { DeckVisibilityRepository } from '../src/decks/deckvisibility/deckvisibility.repository';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let controller: DeckVisibilityController;
  let service: DeckVisibilityService;
  let repository: DeckVisibilityRepository;

  const visibility = new DeckVisibility();
  visibility.en_name = 'Public';
  visibility.fr_name = 'Public';
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
