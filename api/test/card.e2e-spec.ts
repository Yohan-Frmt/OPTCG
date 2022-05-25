import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CardModule } from '../src/cards/card/card.module';
import { CardService } from '../src/cards/card/card.service';
import { CardController } from '../src/cards/card/card.controller';
import { Card } from '../src/cards/card/card.entity';
import { CardSetDto } from '../src/cards/cardset/cardset.dto';
import { CardTypeDto } from '../src/cards/cardtype/cardtype.dto';
import { CardStatusDto } from '../src/cards/cardstatus/cardstatus.dto';
import { CardTagDto } from '../src/cards/cardtag/cardtag.dto';
import { CardRarityDto } from '../src/cards/cardrarity/cardrarity.dto';
import { CardColorDto } from '../src/cards/cardcolor/cardcolor.dto';
import { CardImageDto } from '../src/cards/cardimage/cardimage.dto';
import { CardErrataDto } from '../src/cards/carderrata/carderrata.dto';

describe('CardController (e2e)', () => {
  let app: INestApplication;
  let controller: CardController;
  let service: CardService;
  let repository: Repository<Card>;

  const set = new CardSetDto();
  set.fr_name = 'test';
  set.en_name = 'test';

  const type = new CardTypeDto();
  type.fr_name = 'test';
  type.en_name = 'test';

  const tag = new CardTagDto();
  tag.fr_name = 'test';
  tag.en_name = 'test';

  const rarity = new CardRarityDto();
  rarity.fr_name = 'test';
  rarity.en_name = 'test';
  rarity.abbr = 'test';

  const image = new CardImageDto();
  image.path = 'test';

  const errata = new CardErrataDto();
  errata.description = 'test';

  const status = new CardStatusDto();
  status.fr_name = 'test';
  status.en_name = 'test';
  status.max_amount = 1;

  const color = new CardColorDto();
  color.fr_name = 'test';
  color.en_name = 'test';
  color.hex_color = '#000000';

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
      imports: [CardModule, TypeOrmModule.forFeature([Card])],
    })
      .overrideProvider(getRepositoryToken(Card))
      .useValue(mockRepository)
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    repository = moduleRef.get(getRepositoryToken(Card));
    service = new CardService(repository);
    controller = new CardController(service);
  });

  it('/cards (GET)', async () => {
    return request(app.getHttpServer())
      .get('/cards')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(await controller.findAll());
  });

  it('/cards (POST)', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return (
      request(app.getHttpServer())
        .post('/cards')
        .send(dto)
        .expect('Content-type', /json/)
        // .expect(201)
        .then((response) => {
          expect(response.body).toEqual({
            id: expect.stringMatching(
              /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
            ),
            ...dto,
          });
        })
    );
  });

  it('/cards (POST) --> Validation Error serial_number is empty ', () => {
    const dto = {
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'serial_number should not be empty',
        );
      });
  });

  it('/cards (POST) --> Validation Error serial_number is not a string ', () => {
    const dto = {
      serial_number: 123456789,
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'serial_number must be a string',
        );
      });
  });

  it('/cards (POST) --> Validation Error fr_name is empty ', () => {
    const dto = {
      serial_number: '123456789',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error fr_name is not a string ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 123,
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_name must be a string');
      });
  });

  it('/cards (POST) --> Validation Error en_name is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error en_name is not a string ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 123,
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_name must be a string');
      });
  });

  it('/cards (POST) --> Validation Error jp_name is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('jp_name should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error jp_name is not a string ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 123,
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('jp_name must be a string');
      });
  });

  it('/cards (POST) --> Validation Error cost is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('cost should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error cost is not a number ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: '1',
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'cost must be a number conforming to the specified constraints',
        );
      });
  });

  it('/cards (POST) --> Validation Error power is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('power should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error power is not a number ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: '1',
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'power must be a number conforming to the specified constraints',
        );
      });
  });

  it('/cards (POST) --> Validation Error life is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('life should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error life is not a number ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: '1',
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'life must be a number conforming to the specified constraints',
        );
      });
  });

  it('/cards (POST) --> Validation Error fr_effect is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'fr_effect should not be empty',
        );
      });
  });

  it('/cards (POST) --> Validation Error fr_effect is not a string ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 123,
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('fr_effect must be a string');
      });
  });

  it('/cards (POST) --> Validation Error en_effect is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'en_effect should not be empty',
        );
      });
  });

  it('/cards (POST) --> Validation Error en_effect is not a string ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 123,
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('en_effect must be a string');
      });
  });

  it('/cards (POST) --> Validation Error counter is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('counter should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error counter is not a number ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: '1',
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'counter must be a number conforming to the specified constraints',
        );
      });
  });

  it('/cards (POST) --> Validation Error set is not defined ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'set should not be null or undefined',
        );
      });
  });

  it('/cards (POST) --> Validation Error set is not a DTO ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set: 'test',
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'set.each value in nested property set must be either object or array',
        );
      });
  });

  it('/cards (POST) --> Validation Error type is not defined ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'type should not be null or undefined',
        );
      });
  });

  it('/cards (POST) --> Validation Error type is not a DTO ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type: 'test',
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'type.each value in nested property type must be either object or array',
        );
      });
  });

  it('/cards (POST) --> Validation Error colors is not defined ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'colors should not be null or undefined',
        );
      });
  });

  it('/cards (POST) --> Validation Error colors is not a DTO ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: 'color',
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'colors.each value in nested property colors must be either object or array',
        );
      });
  });

  it('/cards (POST) --> Validation Error colors is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [],
      tags: [tag],
      images: [image],
      rarities: [rarity],

      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('colors should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error tags is not defined ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'tags should not be null or undefined',
        );
      });
  });

  it('/cards (POST) --> Validation Error tags is not a DTO ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: 'tag',
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'tags.each value in nested property tags must be either object or array',
        );
      });
  });

  it('/cards (POST) --> Validation Error tags is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('tags should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error images is not defined ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'images should not be null or undefined',
        );
      });
  });

  it('/cards (POST) --> Validation Error images is not a DTO ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: 'image',
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'images.each value in nested property images must be either object or array',
        );
      });
  });

  it('/cards (POST) --> Validation Error images is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [],
      rarities: [rarity],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('images should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error rarities is not defined ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'rarities should not be null or undefined',
        );
      });
  });

  it('/cards (POST) --> Validation Error rarities is not a DTO ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: 'rarity',
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'rarities.each value in nested property rarities must be either object or array',
        );
      });
  });

  it('/cards (POST) --> Validation Error rarities is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [],
      errata: [errata],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('rarities should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error errata is not defined ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'errata should not be null or undefined',
        );
      });
  });

  it('/cards (POST) --> Validation Error errata is not a DTO ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: 'errata',
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'errata.each value in nested property errata must be either object or array',
        );
      });
  });

  it('/cards (POST) --> Validation Error errata is empty ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [],
      status,
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain('errata should not be empty');
      });
  });

  it('/cards (POST) --> Validation Error status is not defined ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'status should not be null or undefined',
        );
      });
  });

  it('/cards (POST) --> Validation Error status is not a DTO ', () => {
    const dto = {
      serial_number: '123456789',
      fr_name: 'tester',
      en_name: 'test',
      jp_name: 'testo',
      cost: 1,
      power: 1,
      life: 1,
      fr_effect: 'test',
      en_effect: 'test',
      counter: 1,
      set,
      type,
      colors: [color],
      tags: [tag],
      images: [image],
      rarities: [rarity],
      errata: [errata],
      status: 'status',
    };

    return request(app.getHttpServer())
      .post('/cards')
      .send(dto)
      .expect('Content-type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toContain(
          'status.each value in nested property status must be either object or array',
        );
      });
  });
});
