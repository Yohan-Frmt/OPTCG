import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { kid, smile, supernovas } from '../utils/tags.cards';
import { purple } from '../utils/colors.cards';
import { slash } from '../utils/attributes.cards';

export const op1_108 = new Card();
op1_108.serial_number = 'OP01-108';
op1_108.fr_name = 'Kamazo the Manslayer';
op1_108.en_name = 'Kamazo the Manslayer';
op1_108.jp_name = 'クロコダイル';
op1_108.power = 5000;
op1_108.cost = 4;
op1_108.fr_effect = "flemme de trad pour l'instant";
op1_108.en_effect =
  "[On K.O.] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck): K.O. 1 of your opponent's Characters with a cost of 5 or less.";
op1_108.set = romanceDawn;
op1_108.type = character;
op1_108.colors = [purple];
op1_108.tags = [supernovas, kid, smile];
op1_108.rarities = [uncommon];
op1_108.status = unlimited;
op1_108.attribute = slash;
