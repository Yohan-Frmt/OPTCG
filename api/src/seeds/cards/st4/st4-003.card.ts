import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { superRare } from '../utils/rarities.cards';
import { starterAnimal } from '../utils/sets.cards';
import { purple } from '../utils/colors.cards';
import { strike } from '../utils/attributes.cards';
import { beast, emperors } from '../utils/tags.cards';

export const st4_003 = new Card();
st4_003.serial_number = 'ST04-003';
st4_003.fr_name = 'Kaido';
st4_003.en_name = 'Kaido';
st4_003.jp_name = 'クロコダイル';
st4_003.power = 10000;
st4_003.cost = 9;
st4_003.fr_effect = "flemme de trad pour l'instant";
st4_003.en_effect =
  "[On Play] DON!! −5 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. 1 of your opponent's Characters with a cost of 6 or less. This Character gains [Rush] during this turn.";
st4_003.set = starterAnimal;
st4_003.type = character;
st4_003.colors = [purple];
st4_003.tags = [beast, emperors];
st4_003.rarities = [superRare];
st4_003.status = unlimited;
st4_003.attribute = strike;
