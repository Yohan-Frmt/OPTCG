import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { beast } from '../utils/tags.cards';

export const st4_010 = new Card();
st4_010.serial_number = 'ST04-010';
st4_010.fr_name = "Who's.Who";
st4_010.en_name = "Who's.Who";
st4_010.jp_name = 'クロコダイル';
st4_010.power = 3000;
st4_010.cost = 3;
st4_010.fr_effect = "flemme de trad pour l'instant";
st4_010.en_effect =
  "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. 1 of your opponent's Characters with a cost of 3 or less.";
st4_010.fr_trigger_effect = "flemme de trad pour l'instant";
st4_010.en_trigger_effect = '[Trigger] Play this card.';
st4_010.set = starterAnimal;
st4_010.type = character;
st4_010.colors = [purple];
st4_010.tags = [beast];
st4_010.rarities = [common];
st4_010.status = unlimited;
st4_010.attribute = slash;
