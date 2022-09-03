import { Card } from '../../../cards/card/card.entity';
import { leader } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { baroque, warlord } from '../utils/tags.cards';
import { leaderRare } from '../utils/rarities.cards';
import { starterWarlord } from '../utils/sets.cards';
import { special } from '../utils/attributes.cards';

export const st3_001 = new Card();
st3_001.serial_number = 'ST03-001';
st3_001.fr_name = 'Crocodile';
st3_001.en_name = 'Crocodile';
st3_001.jp_name = 'クロコダイル';
st3_001.power = 5000;
st3_001.life = 5;
st3_001.fr_effect = "flemme de trad pour l'instant";
st3_001.en_effect =
  "[Activate: Main] [Once Per Turn] DON!! −4 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Return 1 Character with a cost of 5 or less to the owner's hand.";
st3_001.set = starterWarlord;
st3_001.type = leader;
st3_001.colors = [blue];
st3_001.tags = [warlord, baroque];
st3_001.rarities = [leaderRare];
st3_001.status = unlimited;
st3_001.attribute = special;
