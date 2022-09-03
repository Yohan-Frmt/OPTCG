import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { event } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { uncommon } from '../utils/rarities.cards';
import { strawHat } from '../utils/tags.cards';

export const op1_029 = new Card();
op1_029.serial_number = 'OP01-029';
op1_029.fr_name = 'Radical Beam';
op1_029.en_name = 'Radical Beam';
op1_029.jp_name = 'クロコダイル';
op1_029.cost = 1;
op1_029.fr_effect = "flemme de trad pour l'instant";
op1_029.en_effect =
  '[Counter] Your Leader or 1 of your Characters gains +2000 Power during this battle. Then, if you have 2 or less Life cards, that card gains an additional +2000 power during that batlle.';
op1_029.fr_trigger_effect = "flemme de trad pour l'instant";
op1_029.en_trigger_effect =
  'Your Leader or 1 of your Characters gains +1000 during this turn.';
op1_029.set = romanceDawn;
op1_029.type = event;
op1_029.colors = [red];
op1_029.tags = [strawHat];
op1_029.rarities = [uncommon];
op1_029.status = unlimited;
