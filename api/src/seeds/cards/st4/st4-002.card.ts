import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { strike } from '../utils/attributes.cards';
import { beast } from '../utils/tags.cards';

export const st4_002 = new Card();
st4_002.serial_number = 'ST04-002';
st4_002.fr_name = 'Ulti';
st4_002.en_name = 'Ulti';
st4_002.jp_name = 'クロコダイル';
st4_002.power = 5000;
st4_002.cost = 4;
st4_002.fr_effect = "flemme de trad pour l'instant";
st4_002.en_effect =
  '[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Play 1 Page One card with a cost of 4 or less from your hand.';
st4_002.set = starterAnimal;
st4_002.type = character;
st4_002.colors = [purple];
st4_002.tags = [beast];
st4_002.rarities = [common];
st4_002.status = unlimited;
st4_002.attribute = strike;
