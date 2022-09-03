import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { beast } from '../utils/tags.cards';

export const st4_008 = new Card();
st4_008.serial_number = 'ST04-008';
st4_008.fr_name = 'Jack';
st4_008.en_name = 'Jack';
st4_008.jp_name = 'クロコダイル';
st4_008.power = 4000;
st4_008.cost = 3;
st4_008.fr_effect = "flemme de trad pour l'instant";
st4_008.en_effect =
  '[On Play] You may trash 1 card from your hand: Add 1 card from your DON!! deck and set it as active.';
st4_008.set = starterAnimal;
st4_008.type = character;
st4_008.colors = [purple];
st4_008.tags = [beast];
st4_008.rarities = [common];
st4_008.status = unlimited;
st4_008.attribute = strike;
