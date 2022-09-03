import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { baroque } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { rare } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const op1_079 = new Card();
op1_079.serial_number = 'OP01-079';
op1_079.fr_name = 'Miss All Sunday';
op1_079.en_name = 'Miss All Sunday';
op1_079.jp_name = 'クロコダイル';
op1_079.power = 1000;
op1_079.cost = 3;
op1_079.fr_effect = "flemme de trad pour l'instant";
op1_079.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)' +
  '[On K.O.] If your leader has the {Baroque Works} type, return 1 Event card from your trash to your hand.';
op1_079.set = romanceDawn;
op1_079.type = character;
op1_079.colors = [blue];
op1_079.tags = [baroque];
op1_079.rarities = [rare];
op1_079.status = unlimited;
op1_079.attribute = strike;
