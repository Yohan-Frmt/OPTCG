import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { kid, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st2_016 = new Card();
st2_016.serial_number = 'ST02-016';
st2_016.fr_name = 'Repel';
st2_016.en_name = 'Repel';
st2_016.jp_name = '反発';
st2_016.cost = 1;
st2_016.fr_effect = "flemme de trad pour l'instant";
st2_016.en_effect =
  '[Counter] Your Leader or 1 of your Characters gains +4000 power during this battle. Then, set 1 of your DON!! cards as active.';
st2_016.set = starterWorst;
st2_016.type = event;
st2_016.colors = [green];
st2_016.tags = [supernovas, kid];
st2_016.rarities = [common];
st2_016.status = unlimited;
