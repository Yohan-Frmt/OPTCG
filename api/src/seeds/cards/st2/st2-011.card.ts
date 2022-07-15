import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { kid } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const st2_011 = new Card();
st2_011.serial_number = 'ST02-011';
st2_011.fr_name = 'Heat';
st2_011.en_name = 'Heat';
st2_011.jp_name = 'ヒート';
st2_011.power = 4000;
st2_011.cost = 2;
st2_011.counter = 1000;
st2_011.set = starterWorst;
st2_011.type = character;
st2_011.colors = [green];
st2_011.tags = [kid];
st2_011.rarities = [common];
st2_011.status = unlimited;
st2_011.attribute = special;