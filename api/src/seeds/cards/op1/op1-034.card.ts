import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { green } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';
import { minks, scabbards, wano } from '../utils/tags.cards';

export const op1_034 = new Card();
op1_034.serial_number = 'OP01-034';
op1_034.fr_name = 'Dog Storm';
op1_034.en_name = 'Dog Storm';
op1_034.jp_name = 'クロコダイル';
op1_034.power = 4000;
op1_034.cost = 3;
op1_034.fr_effect = "flemme de trad pour l'instant";
op1_034.en_effect =
  '[DON!! x2] [When attacking] Set 1 of your DON!! as active.';
op1_034.set = romanceDawn;
op1_034.type = character;
op1_034.colors = [green];
op1_034.tags = [minks, wano, scabbards];
op1_034.rarities = [common];
op1_034.status = unlimited;
op1_034.attribute = slash;
