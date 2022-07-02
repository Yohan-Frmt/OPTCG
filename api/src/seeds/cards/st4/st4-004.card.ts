import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { special } from '../utils/attributes.cards';
import { superRare } from '../utils/rarities.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { beast } from '../utils/tags.cards';

export const st4_004 = new Card();
st4_004.serial_number = 'ST04-004';
st4_004.fr_name = 'King';
st4_004.en_name = 'King';
st4_004.jp_name = 'クロコダイル';
st4_004.power = 7000;
st4_004.cost = 6;
st4_004.fr_effect = "flemme de trad pour l'instant";
st4_004.en_effect =
  "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. 1 of your opponent's Characters with a cost of 4 or less.";
st4_004.set = starterAnimal;
st4_004.type = character;
st4_004.colors = [purple];
st4_004.tags = [beast];
st4_004.rarities = [superRare];
st4_004.status = unlimited;
st4_004.attribute = special;
