import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { kuja, warlord } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const st3_013 = new Card();
st3_013.serial_number = 'ST03-013';
st3_013.fr_name = 'Boa Hancock';
st3_013.en_name = 'Boa Hancock';
st3_013.jp_name = 'ユースタス・キッド';
st3_013.power = 1000;
st3_013.cost = 3;
st3_013.counter = 1000;
st3_013.fr_effect = "flemme de trad pour l'instant";
st3_013.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)';
st3_013.fr_trigger_effect = "flemme de trad pour l'instant";
st3_013.en_trigger_effect = '[Trigger] Play this card.';
st3_013.set = starterWarlord;
st3_013.type = character;
st3_013.colors = [blue];
st3_013.tags = [warlord, kuja];
st3_013.rarities = [common];
st3_013.status = unlimited;
st3_013.attribute = special;
