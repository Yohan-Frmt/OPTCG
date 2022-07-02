import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { revolutionary, warlord } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st3_016 = new Card();
st3_016.serial_number = 'ST03-016';
st3_016.fr_name = 'Thrust Pad Cannon';
st3_016.en_name = 'Thrust Pad Cannon';
st3_016.jp_name = '反発';
st3_016.cost = 2;
st3_016.fr_effect = "flemme de trad pour l'instant";
st3_016.en_effect =
  "[Counter] Return 1 Character with a cost of 3 or less to the owner's hand.";
st3_016.fr_trigger_effect = "flemme de trad pour l'instant";
st3_016.en_trigger_effect = "[Trigger] Activate this card's [Counter] effect.";
st3_016.set = starterWarlord;
st3_016.type = event;
st3_016.colors = [blue];
st3_016.tags = [warlord, revolutionary];
st3_016.rarities = [common];
st3_016.status = unlimited;
