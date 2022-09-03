import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { green } from '../utils/colors.cards';
import { kid, supernovas } from '../utils/tags.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const op1_039 = new Card();
op1_039.serial_number = 'OP01-039';
op1_039.fr_name = 'Killer';
op1_039.en_name = 'Killer';
op1_039.jp_name = 'クロコダイル';
op1_039.power = 2000;
op1_039.cost = 2;
op1_039.fr_effect = "flemme de trad pour l'instant";
op1_039.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)' +
  '[DON!! x1] [When Blocking] If you control 3 or more Characters, draw 1 card.';
op1_039.set = romanceDawn;
op1_039.type = character;
op1_039.colors = [green];
op1_039.tags = [supernovas, kid];
op1_039.rarities = [uncommon];
op1_039.status = unlimited;
op1_039.attribute = slash;
