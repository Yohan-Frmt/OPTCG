import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { revolutionary, warlord } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const st3_010 = new Card();
st3_010.serial_number = 'ST03-010';
st3_010.fr_name = 'Bartholomew Kuma';
st3_010.en_name = 'Bartholomew Kuma';
st3_010.jp_name = 'バジル・ホーキンス';
st3_010.power = 3000;
st3_010.cost = 2;
st3_010.fr_effect = "flemme de trad pour l'instant";
st3_010.en_effect =
  '[On Play] Look at 3 cards from the top of your deck and return them to the top or bottom of the deck in any order.';
st3_010.fr_trigger_effect = "flemme de trad pour l'instant";
st3_010.en_trigger_effect = '[Trigger] Play this card.';
st3_010.set = starterWarlord;
st3_010.type = character;
st3_010.colors = [blue];
st3_010.tags = [warlord, revolutionary];
st3_010.rarities = [common];
st3_010.status = unlimited;
st3_010.attribute = strike;
