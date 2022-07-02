import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const st1_010 = new Card();
st1_010.serial_number = 'ST01-010';
st1_010.fr_name = 'Franky';
st1_010.en_name = 'Franky';
st1_010.jp_name = 'フランキー';
st1_010.power = 6000;
st1_010.cost = 4;
st1_010.counter = 1000;
st1_010.set = starterStraw;
st1_010.type = character;
st1_010.colors = [red];
st1_010.tags = [strawHat];
st1_010.rarities = [common];
st1_010.status = unlimited;
st1_010.attribute = strike;
