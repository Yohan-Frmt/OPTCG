import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { ranged } from '../utils/attributes.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { beast } from '../utils/tags.cards';

export const st4_006 = new Card();
st4_006.serial_number = 'ST04-006';
st4_006.fr_name = 'Sasaki';
st4_006.en_name = 'Sasaki';
st4_006.jp_name = 'クロコダイル';
st4_006.power = 4000;
st4_006.cost = 3;
st4_006.fr_effect = "flemme de trad pour l'instant";
st4_006.en_effect =
  '[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Draw 1 card.';
st4_006.set = starterAnimal;
st4_006.type = character;
st4_006.colors = [purple];
st4_006.tags = [beast];
st4_006.rarities = [common];
st4_006.status = unlimited;
st4_006.attribute = ranged;
