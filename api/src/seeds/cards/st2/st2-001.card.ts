import { Card } from '../../../cards/card/card.entity';
import { leader } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { kid, supernovas } from '../utils/tags.cards';
import { leaderRare } from '../utils/rarities.cards';
import { starterWorst } from '../utils/sets.cards';
import { special } from '../utils/attributes.cards';

export const st2_001 = new Card();
st2_001.serial_number = 'ST02-001';
st2_001.fr_name = 'Eustass "Captain" Kid';
st2_001.en_name = 'Eustass "Captain" Kid';
st2_001.jp_name = 'ユースタス・キッド';
st2_001.power = 5000;
st2_001.life = 5;
st2_001.fr_effect = "flemme de trad pour l'instant";
st2_001.en_effect =
  '[Activate: Main] [Once Per Turn] (3)(You may rest the specified number of DON!! cards in your cost area.): You may trash 1 card from your hand: Set this Leader as active.';
st2_001.set = starterWorst;
st2_001.type = leader;
st2_001.colors = [green];
st2_001.tags = [kid, supernovas];
st2_001.rarities = [leaderRare];
st2_001.status = unlimited;
st2_001.attribute = special;
