import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const op1_022 = new Card();
op1_022.serial_number = 'OP01-022';
op1_022.fr_name = 'Brook';
op1_022.en_name = 'Brook';
op1_022.jp_name = 'クロコダイル';
op1_022.power = 5000;
op1_022.cost = 4;
op1_022.fr_effect = "flemme de trad pour l'instant";
op1_022.en_effect =
  "[DON!! x1] [When Attacking] Up to 2 of your opponent's Characters gain -2000 Power for this turn.";
op1_022.set = romanceDawn;
op1_022.type = character;
op1_022.colors = [red];
op1_022.tags = [strawHat];
op1_022.rarities = [uncommon];
op1_022.status = unlimited;
op1_022.attribute = slash;
