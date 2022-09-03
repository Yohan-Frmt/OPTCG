import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { purple } from '../utils/colors.cards';
import { beast } from '../utils/tags.cards';

export const op1_109 = new Card();
op1_109.serial_number = 'OP01-109';
op1_109.fr_name = "Who's Who";
op1_109.en_name = "Who's Who";
op1_109.jp_name = 'クロコダイル';
op1_109.power = 3000;
op1_109.cost = 2;
op1_109.fr_effect = "flemme de trad pour l'instant";
op1_109.en_effect =
  '[DON!! x1] [Your Turn] As long as there are 8 or more DON!! on your field, this Character gains +1000 power.';
op1_109.set = romanceDawn;
op1_109.type = character;
op1_109.colors = [purple];
op1_109.tags = [beast];
op1_109.rarities = [uncommon];
op1_109.status = unlimited;
