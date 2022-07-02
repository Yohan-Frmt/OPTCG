import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { navy } from '../utils/tags.cards';
import { slash } from '../utils/attributes.cards';

export const st3_007 = new Card();
st3_007.serial_number = 'ST03-007';
st3_007.fr_name = 'Sentomaru';
st3_007.en_name = 'Sentomaru';
st3_007.jp_name = 'ジュエリー・ボニー';
st3_007.power = 4000;
st3_007.cost = 3;
st3_007.counter = 1000;
st3_007.fr_effect = "flemme de trad pour l'instant";
st3_007.en_effect =
  '[DON!! x1] [Activate: Main] [Once Per Turn] (2)(You may rest the specified number of DON!! cards in your cost area.): Play 1 [Pacifista] with a cost of 4 or less from your deck, then shuffle your deck.';
st3_007.set = starterWarlord;
st3_007.type = character;
st3_007.colors = [blue];
st3_007.tags = [navy];
st3_007.rarities = [common];
st3_007.status = unlimited;
st3_007.attribute = slash;
