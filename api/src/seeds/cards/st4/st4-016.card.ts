import { Card } from '../../../cards/card/card.entity';
import { event } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { beast, emperors } from '../utils/tags.cards';

export const st4_016 = new Card();
st4_016.serial_number = 'ST04-016';
st4_016.fr_name = 'Blast Breath';
st4_016.en_name = 'Blast Breath';
st4_016.jp_name = 'クロコダイル';
st4_016.cost = 1;
st4_016.fr_effect = "flemme de trad pour l'instant";
st4_016.en_effect =
  '[Counter] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your Leader or 1 of your Characters gains +4000 power during this battle.';
st4_016.set = starterAnimal;
st4_016.type = event;
st4_016.colors = [purple];
st4_016.tags = [emperors, beast];
st4_016.rarities = [common];
st4_016.status = unlimited;
