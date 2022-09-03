import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { supernovas } from '../utils/tags.cards';
import { special } from '../utils/attributes.cards';

export const st2_007 = new Card();
st2_007.serial_number = 'ST02-007';
st2_007.fr_name = 'Jewelry Bonney';
st2_007.en_name = 'Jewelry Bonney';
st2_007.jp_name = 'ジュエリー・ボニー';
st2_007.power = 1000;
st2_007.cost = 1;
st2_007.counter = 1000;
st2_007.fr_effect = "flemme de trad pour l'instant";
st2_007.en_effect =
  '[Activate: Main] (1)(You may rest the specified number of DON!! cards in your cost area.) You may rest this card: Look at up to 5 cards from the top of your deck; reveal 1 {Supernovas} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.';
st2_007.set = starterWorst;
st2_007.type = character;
st2_007.colors = [green];
st2_007.tags = [supernovas];
st2_007.rarities = [common];
st2_007.status = unlimited;
st2_007.attribute = special;
