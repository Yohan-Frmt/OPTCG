import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { firetank, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const st2_004 = new Card();
st2_004.serial_number = 'ST02-004';
st2_004.fr_name = 'Capone "Gang" Bege';
st2_004.en_name = 'Capone "Gang" Bege';
st2_004.jp_name = 'カポネ・ベッジ';
st2_004.power = 1000;
st2_004.cost = 1;
st2_004.fr_effect = "flemme de trad pour l'instant";
st2_004.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)';
st2_004.set = starterWorst;
st2_004.type = character;
st2_004.colors = [green];
st2_004.tags = [supernovas, firetank];
st2_004.rarities = [common];
st2_004.status = unlimited;
st2_004.attribute = special;
