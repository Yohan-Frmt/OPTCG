import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { onair, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { ranged } from '../utils/attributes.cards';

export const st2_008 = new Card();
st2_008.serial_number = 'ST02-008';
st2_008.fr_name = 'Scratchmen Apoo';
st2_008.en_name = 'Scratchmen Apoo';
st2_008.jp_name = 'スクラッチメン・アプー';
st2_008.power = 3000;
st2_008.cost = 2;
st2_008.counter = 2000;
st2_008.fr_effect = "flemme de trad pour l'instant";
st2_008.en_effect =
  "[DON!! x1] [When Attacking] Rest 1 of your opponent's DON!! cards.";
st2_008.set = starterWorst;
st2_008.type = character;
st2_008.colors = [green];
st2_008.tags = [supernovas, onair];
st2_008.rarities = [common];
st2_008.status = unlimited;
st2_008.attribute = ranged;
