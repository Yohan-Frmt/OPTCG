import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { heart, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st2_015 = new Card();
st2_015.serial_number = 'ST02-015';
st2_015.fr_name = 'Scalpel';
st2_015.en_name = 'Scalpel';
st2_015.jp_name = 'メス';
st2_015.cost = 1;
st2_015.fr_effect = "flemme de trad pour l'instant";
st2_015.en_effect =
  '[Counter] Your Leader or 1 of your Characters gains +2000 power during this battle. Then, set 1 of your DON!! cards as active. [Trigger] Set up to 2 of your DON!! cards as active.';
st2_015.set = starterWorst;
st2_015.type = event;
st2_015.colors = [green];
st2_015.tags = [heart, supernovas];
st2_015.rarities = [common];
st2_015.status = unlimited;
