import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { starterAnimal } from '../utils/sets.cards';
import { purple } from '../utils/colors.cards';
import { strike } from '../utils/attributes.cards';
import { beast } from '../utils/tags.cards';

export const st4_005 = new Card();
st4_005.serial_number = 'ST04-005';
st4_005.fr_name = 'Queen';
st4_005.en_name = 'Queen';
st4_005.jp_name = 'クロコダイル';
st4_005.power = 6000;
st4_005.cost = 5;
st4_005.fr_effect = "flemme de trad pour l'instant";
st4_005.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)';
st4_005.set = starterAnimal;
st4_005.type = character;
st4_005.colors = [purple];
st4_005.tags = [beast];
st4_005.rarities = [common];
st4_005.status = unlimited;
st4_005.attribute = strike;
