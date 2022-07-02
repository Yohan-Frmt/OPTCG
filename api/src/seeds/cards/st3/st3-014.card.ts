import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { black, warlord } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const st3_014 = new Card();
st3_014.serial_number = 'ST03-014';
st3_014.fr_name = 'Marshall.D.Teach';
st3_014.en_name = 'Marshall.D.Teach';
st3_014.jp_name = 'X・ドレーク';
st3_014.power = 4000;
st3_014.cost = 4;
st3_014.counter = 1000;
st3_014.fr_effect = "flemme de trad pour l'instant";
st3_014.en_effect =
  "[On Play] Return 1 Character with a cost of 3 or less to the owner's hand.";
st3_014.set = starterWarlord;
st3_014.type = character;
st3_014.colors = [blue];
st3_014.tags = [warlord, black];
st3_014.rarities = [common];
st3_014.status = unlimited;
st3_014.attribute = special;
