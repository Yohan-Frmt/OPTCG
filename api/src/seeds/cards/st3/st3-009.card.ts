import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { donquixote, warlord } from '../utils/tags.cards';
import { superRare } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const st3_009 = new Card();
st3_009.serial_number = 'ST03-009';
st3_009.fr_name = 'Donquixote Doflamingo';
st3_009.en_name = 'Donquixote Doflamingo';
st3_009.jp_name = 'トラファルガー・ロー';
st3_009.power = 7000;
st3_009.cost = 7;
st3_009.fr_effect = "flemme de trad pour l'instant";
st3_009.en_effect =
  "[On Play] Return 1 Character with a cost of 7 or less to the owner's hand.";
st3_009.set = starterWarlord;
st3_009.type = character;
st3_009.colors = [blue];
st3_009.tags = [warlord, donquixote];
st3_009.rarities = [superRare];
st3_009.status = unlimited;
st3_009.attribute = special;
