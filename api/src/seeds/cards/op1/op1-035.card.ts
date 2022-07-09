import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';
import { scabbards, wano } from '../utils/tags.cards';

export const op1_035 = new Card();
op1_035.serial_number = 'OP01-035';
op1_035.fr_name = 'Okiku';
op1_035.en_name = 'Okiku';
op1_035.jp_name = 'クロコダイル';
op1_035.power = 5000;
op1_035.cost = 3;
op1_035.fr_effect = "flemme de trad pour l'instant";
op1_035.en_effect =
  "[DON!! x1] [When Attacking] [Once Per Turn] Rest 1 of your opponent's Characters with a cost of 5 or less";
op1_035.set = romanceDawn;
op1_035.type = character;
op1_035.colors = [green];
op1_035.tags = [wano, scabbards];
op1_035.rarities = [common];
op1_035.status = unlimited;
op1_035.attribute = slash;
