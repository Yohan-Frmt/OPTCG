import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { randomUUID } from 'crypto';
import { CardType } from '../cardtype/cardtype.entity';
import { CardTag } from '../cardtag/cardtag.entity';
import { CardImage } from '../cardimage/cardimage.entity';
import { CardColor } from '../cardcolor/cardcolor.entity';
import { CardErrata } from '../carderrata/carderrata.entity';
import { CardStatus } from '../cardstatus/cardstatus.entity';
import { CardSet } from '../cardset/cardset.entity';
import { CardRarity } from '../cardrarity/cardrarity.entity';

describe('CardController', () => {
  let controller: CardController;

  const set = new CardSet();
  set.fr_name = 'test';
  set.en_name = 'test';

  const type = new CardType();
  type.fr_name = 'test';
  type.en_name = 'test';

  const tag = new CardTag();
  tag.fr_name = 'test';
  tag.en_name = 'test';

  const rarity = new CardRarity();
  rarity.fr_name = 'test';
  rarity.en_name = 'test';

  const image = new CardImage('test');

  const errata = new CardErrata();
  errata.description = 'test';

  const status = new CardStatus();
  status.fr_name = 'test';
  status.en_name = 'test';
  status.max_amount = 1;

  const color = new CardColor();
  color.fr_name = 'test';
  color.en_name = 'test';
  color.hex_color = '#000000';

  const mockService = {
    create: jest.fn((dto) => {
      return {
        id: randomUUID(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [CardService],
    })
      .overrideProvider(CardService)
      .useValue(mockService)
      .compile();

    controller = module.get<CardController>(CardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new type', async () => {
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
    expect(await controller.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
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
      set: {
        fr_name: 'test',
        en_name: 'test',
      },
      type: {
        fr_name: 'test',
        en_name: 'test',
      },
      colors: [
        {
          fr_name: 'test',
          en_name: 'test',
          hex_color: '#000000',
        },
      ],
      tags: [
        {
          fr_name: 'test',
          en_name: 'test',
        },
      ],
      images: [
        {
          path: 'test',
        },
      ],
      rarities: [
        {
          fr_name: 'test',
          en_name: 'test',
        },
      ],
      errata: [
        {
          description: 'test',
        },
      ],
      status: {
        fr_name: 'test',
        en_name: 'test',
        max_amount: 1,
      },
    });
  });
});
