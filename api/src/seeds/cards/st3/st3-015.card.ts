import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { baroque, warlord } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st3_015 = new Card();
st3_015.serial_number = 'ST03-015';
st3_015.fr_name = 'Sables';
st3_015.en_name = 'Sables';
st3_015.jp_name = 'メス';
st3_015.cost = 4;
st3_015.fr_effect = "flemme de trad pour l'instant";
st3_015.en_effect =
  "[Main] Return 1 Character with a cost of 7 or less to the owner's hand.";
st3_015.fr_trigger_effect = "flemme de trad pour l'instant";
st3_015.en_trigger_effect = "[Trigger] Activate this card's [Main] effect.";
st3_015.set = starterWarlord;
st3_015.type = event;
st3_015.colors = [blue];
st3_015.tags = [warlord, baroque];
st3_015.rarities = [common];
st3_015.status = unlimited;
