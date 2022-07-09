import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';
import { heart } from '../utils/tags.cards';

export const op1_044 = new Card();
op1_044.serial_number = 'OP01-044';
op1_044.fr_name = 'Shachi';
op1_044.en_name = 'Shachi';
op1_044.jp_name = 'クロコダイル';
op1_044.power = 4000;
op1_044.cost = 3;
op1_044.fr_effect = "flemme de trad pour l'instant";
op1_044.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)' +
  '[On Play] If you do not controi [Penguin], play 1 [Penguin] card from your hand.';
op1_044.set = romanceDawn;
op1_044.type = character;
op1_044.colors = [green];
op1_044.tags = [heart];
op1_044.rarities = [common];
op1_044.status = unlimited;
op1_044.attribute = strike;
