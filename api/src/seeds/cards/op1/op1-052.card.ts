import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { green } from '../utils/colors.cards';
import { slash } from '../utils/attributes.cards';
import { scabbards, wano } from '../utils/tags.cards';

export const op1_052 = new Card();
op1_052.serial_number = 'OP01-052';
op1_052.fr_name = 'Raizo';
op1_052.en_name = 'Raizo';
op1_052.jp_name = 'クロコダイル';
op1_052.power = 4000;
op1_052.cost = 3;
op1_052.fr_effect = "flemme de trad pour l'instant";
op1_052.en_effect =
  '[When Attacking] [Once Per Turn] If you have 2 or more Characters, draw 1 card.';
op1_052.set = romanceDawn;
op1_052.type = character;
op1_052.colors = [green];
op1_052.tags = [wano, scabbards];
op1_052.rarities = [uncommon];
op1_052.status = unlimited;
op1_052.attribute = slash;
