import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { randomUUID } from 'crypto';
import { CardType } from '../cardtype/cardtype.entity';
import { CardTag } from '../cardtag/cardtag.entity';
import { CardImage } from '../cardimage/cardimage.entity';
import { CardColor } from '../cardcolor/cardcolor.entity';
import { CardErrata } from '../carderrata/carderrata.entity';
import { CardStatus } from '../cardstatus/cardstatus.entity';
import { CardSet } from '../cardset/cardset.entity';
import { CardRarity } from '../cardrarity/cardrarity.entity';

describe('CardService', () => {
  let service: CardService;
  const repositoryToken = getRepositoryToken(Card);

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

  const image = new CardImage();
  image.path = 'test';

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

  const mockRepository = {
    create: jest.fn((dto) => dto),
    save: jest.fn((card) =>
      Promise.resolve({
        id: randomUUID(),
        ...card,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardService,
        {
          provide: repositoryToken,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CardService>(CardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new card', async () => {
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
    expect(await service.create(dto)).toEqual({
      id: expect.stringMatching(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      ),
      ...dto,
    });
  });
});