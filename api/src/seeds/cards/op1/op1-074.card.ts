import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { revolutionary, warlord } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { rare } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const op1_074 = new Card();
op1_074.serial_number = 'OP01-074';
op1_074.fr_name = 'Bartholomew Kuma';
op1_074.en_name = 'Bartholomew Kuma';
op1_074.jp_name = 'クロコダイル';
op1_074.power = 5000;
op1_074.cost = 4;
op1_074.fr_effect = "flemme de trad pour l'instant";
op1_074.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)' +
  '[On K.O.] Play 1 [Pacifista] card with a cost of 4 or less from your hand.';
op1_074.set = romanceDawn;
op1_074.type = character;
op1_074.colors = [blue];
op1_074.tags = [warlord, revolutionary];
op1_074.rarities = [rare];
op1_074.status = unlimited;
op1_074.attribute = strike;
