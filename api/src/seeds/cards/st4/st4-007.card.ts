import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { beast, smile } from '../utils/tags.cards';

export const st4_007 = new Card();
st4_007.serial_number = 'ST04-007';
st4_007.fr_name = 'Sheepshead';
st4_007.en_name = 'Sheepshead';
st4_007.jp_name = 'クロコダイル';
st4_007.power = 4000;
st4_007.cost = 2;
st4_007.set = starterAnimal;
st4_007.type = character;
st4_007.colors = [purple];
st4_007.tags = [beast, smile];
st4_007.rarities = [common];
st4_007.status = unlimited;
st4_007.attribute = slash;
