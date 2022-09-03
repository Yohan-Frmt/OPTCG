import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { baroque } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { blue } from '../utils/colors.cards';
import { strike } from '../utils/attributes.cards';

export const op1_084 = new Card();
op1_084.serial_number = 'OP01-084';
op1_084.fr_name = 'Mr. 2 Bon Clay (Bentham)';
op1_084.en_name = 'Mr. 2 Bon Clay (Bentham)';
op1_084.jp_name = 'クロコダイル';
op1_084.power = 4000;
op1_084.cost = 3;
op1_084.fr_effect = "flemme de trad pour l'instant";
op1_084.en_effect =
  '[DON!! x1] [When Attacking] Look at the top 5 cards of your deck and reveal up to 1 {Baroque Works} type Event card and add it to your hand. Place the remaining cards at the bottom of your deck in any order.';
op1_084.set = romanceDawn;
op1_084.type = character;
op1_084.colors = [blue];
op1_084.tags = [baroque];
op1_084.rarities = [uncommon];
op1_084.status = unlimited;
op1_084.attribute = strike;
