import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { drake, navy, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const st2_014 = new Card();
st2_014.serial_number = 'ST02-014';
st2_014.fr_name = 'X.Drake';
st2_014.en_name = 'X.Drake';
st2_014.jp_name = 'X・ドレーク';
st2_014.power = 5000;
st2_014.cost = 4;
st2_014.counter = 1000;
st2_014.fr_effect = "flemme de trad pour l'instant";
st2_014.en_effect =
  '[DON!! x1] [Your Turn] If this Character is rested, your {Supernovas} or {Navy} type Leaders and Characters gain +1000 power.';
st2_014.set = starterWorst;
st2_014.type = character;
st2_014.colors = [green];
st2_014.tags = [navy, supernovas, drake];
st2_014.rarities = [common];
st2_014.status = unlimited;
st2_014.attribute = slash;
