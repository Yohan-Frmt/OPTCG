import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { heart, supernovas } from '../utils/tags.cards';
import { superRare } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const st2_009 = new Card();
st2_009.serial_number = 'ST02-009';
st2_009.fr_name = 'Trafalgar Law';
st2_009.en_name = 'Trafalgar Law';
st2_009.jp_name = 'トラファルガー・ロー';
st2_009.power = 6000;
st2_009.cost = 5;
st2_009.counter = 1000;
st2_009.fr_effect = "flemme de trad pour l'instant";
st2_009.en_effect =
  '[On Play] Set 1 of your {Supernovas} or {Heart Pirates} type rested Characters with a cost of 5 or less as active.';
st2_009.set = starterWorst;
st2_009.type = character;
st2_009.colors = [green];
st2_009.tags = [supernovas, heart];
st2_009.rarities = [superRare];
st2_009.status = unlimited;
st2_009.attribute = slash;
