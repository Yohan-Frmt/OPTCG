import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { fallenmonk, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const st2_003 = new Card();
st2_003.serial_number = 'ST02-003';
st2_003.fr_name = 'Urouge';
st2_003.en_name = 'Urouge';
st2_003.jp_name = 'ウルージ';
st2_003.power = 3000;
st2_003.cost = 2;
st2_003.counter = 1000;
st2_003.fr_effect = "flemme de trad pour l'instant";
st2_003.en_effect =
  '[DON!! x1] If you have 3 or more Characters, this card gains +2000 power.';
st2_003.set = starterWorst;
st2_003.type = character;
st2_003.colors = [green];
st2_003.tags = [supernovas, fallenmonk];
st2_003.rarities = [common];
st2_003.status = unlimited;
st2_003.attribute = strike;
