import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { heart, warlord } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const st3_008 = new Card();
st3_008.serial_number = 'ST03-008';
st3_008.fr_name = 'Trafalgar Law';
st3_008.en_name = 'Trafalgar Law';
st3_008.jp_name = 'スクラッチメン・アプー';
st3_008.power = 1000;
st3_008.cost = 1;
st3_008.fr_effect = "flemme de trad pour l'instant";
st3_008.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)';
st3_008.set = starterWarlord;
st3_008.type = character;
st3_008.colors = [blue];
st3_008.tags = [warlord, heart];
st3_008.rarities = [common];
st3_008.status = unlimited;
st3_008.attribute = slash;
