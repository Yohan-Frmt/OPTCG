import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { warlord } from '../utils/tags.cards';
import { slash } from '../utils/attributes.cards';

export const st3_005 = new Card();
st3_005.serial_number = 'ST03-005';
st3_005.fr_name = 'Dracule Mihawk';
st3_005.en_name = 'Dracule Mihawk';
st3_005.jp_name = 'キラー';
st3_005.power = 5000;
st3_005.cost = 4;
st3_005.counter = 2000;
st3_005.fr_effect = "flemme de trad pour l'instant";
st3_005.en_effect =
  '[DON!! x1] [When Attacking] Draw 2 cards and trash 2 cards from your hand.';
st3_005.set = starterWarlord;
st3_005.type = character;
st3_005.colors = [blue];
st3_005.tags = [warlord];
st3_005.rarities = [common];
st3_005.status = unlimited;
st3_005.attribute = slash;
