import { Card } from '../../../cards/card/card.entity';
import { starterWarlord } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { baroque, warlord } from '../utils/tags.cards';
import { superRare } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const st3_003 = new Card();
st3_003.serial_number = 'ST03-003';
st3_003.fr_name = 'Crocodile';
st3_003.en_name = 'Crocodile';
st3_003.jp_name = 'ウルージ';
st3_003.power = 6000;
st3_003.cost = 5;
st3_003.fr_effect = "flemme de trad pour l'instant";
st3_003.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\n' +
  "[DON!! x1] [On Block] Place 1 Character with a cost of 2 or less at the bottom of the owner's deck.";
st3_003.set = starterWarlord;
st3_003.type = character;
st3_003.colors = [blue];
st3_003.tags = [warlord, baroque];
st3_003.rarities = [superRare];
st3_003.status = unlimited;
st3_003.attribute = special;
