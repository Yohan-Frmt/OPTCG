import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { bark, warlord } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const st3_004 = new Card();
st3_004.serial_number = 'ST03-004';
st3_004.fr_name = 'Gecko Moria';
st3_004.en_name = 'Gecko Moria';
st3_004.jp_name = 'カポネ・ベッジ';
st3_004.power = 5000;
st3_004.cost = 4;
st3_004.counter = 1000;
st3_004.fr_effect = "flemme de trad pour l'instant";
st3_004.en_effect =
  '[On Play] Add 1 {The Seven Warlords of the Sea} or {Thriller Bark Pirates} type Character with a cost of 4 or less other than [Gecko Moria] from your trash to your hand.';
st3_004.set = starterWarlord;
st3_004.type = character;
st3_004.colors = [blue];
st3_004.tags = [warlord, bark];
st3_004.rarities = [common];
st3_004.status = unlimited;
st3_004.attribute = special;
