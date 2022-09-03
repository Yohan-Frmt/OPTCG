import { Card } from '../../../cards/card/card.entity';
import { leader } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { strike } from '../utils/attributes.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { leaderRare } from '../utils/rarities.cards';
import { beast, emperors } from '../utils/tags.cards';

export const st4_001 = new Card();
st4_001.serial_number = 'ST04-001';
st4_001.fr_name = 'Kaido';
st4_001.en_name = 'Kaido';
st4_001.jp_name = 'クロコダイル';
st4_001.power = 5000;
st4_001.life = 5;
st4_001.fr_effect = "flemme de trad pour l'instant";
st4_001.en_effect =
  "[Activate: Main] [Once Per Turn] DON!! −7 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Trash 1 of your opponent's Life cards.";
st4_001.set = starterAnimal;
st4_001.type = leader;
st4_001.colors = [purple];
st4_001.tags = [beast, emperors];
st4_001.rarities = [leaderRare];
st4_001.status = unlimited;
st4_001.attribute = strike;
