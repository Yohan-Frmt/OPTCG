import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { kid, supernovas } from '../utils/tags.cards';
import { slash } from '../utils/attributes.cards';

export const st2_005 = new Card();
st2_005.serial_number = 'ST02-005';
st2_005.fr_name = 'Killer';
st2_005.en_name = 'Killer';
st2_005.jp_name = 'キラー';
st2_005.power = 3000;
st2_005.cost = 3;
st2_005.counter = 1000;
st2_005.fr_effect = "flemme de trad pour l'instant";
st2_005.en_effect =
  "[On Play] K.O. 1 of your opponent's rested Characters with a cost of 3 or less. [Trigger] Play this card.";
st2_005.set = starterWorst;
st2_005.type = character;
st2_005.colors = [green];
st2_005.tags = [supernovas, kid];
st2_005.rarities = [common];
st2_005.status = unlimited;
st2_005.attribute = slash;
