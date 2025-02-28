import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { wisdom } from '../utils/attributes.cards';

export const st1_008 = new Card();
st1_008.serial_number = 'ST01-008';
st1_008.fr_name = 'Nico Robin';
st1_008.en_name = 'Nico Robin';
st1_008.jp_name = 'ニコ・ロイヒ';
st1_008.power = 5000;
st1_008.cost = 3;
st1_008.counter = 1000;
st1_008.set = starterStraw;
st1_008.type = character;
st1_008.colors = [red];
st1_008.tags = [strawHat];
st1_008.rarities = [common];
st1_008.status = unlimited;
st1_008.attribute = wisdom;
