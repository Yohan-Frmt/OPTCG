import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { kid, supernovas } from '../utils/tags.cards';
import { superRare } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const st2_013 = new Card();
st2_013.serial_number = 'ST02-013';
st2_013.fr_name = 'Eustass "Captain" Kid';
st2_013.en_name = 'Eustass "Captain" Kid';
st2_013.jp_name = 'ユースタス・キッド';
st2_013.power = 7000;
st2_013.cost = 7;
st2_013.fr_effect = "flemme de trad pour l'instant";
st2_013.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\n' +
  '[DON!! x1] [End of Your Turn] Set this card as active.';
st2_013.set = starterWorst;
st2_013.type = character;
st2_013.colors = [green];
st2_013.tags = [supernovas, kid];
st2_013.rarities = [superRare];
st2_013.status = unlimited;
st2_013.attribute = special;
