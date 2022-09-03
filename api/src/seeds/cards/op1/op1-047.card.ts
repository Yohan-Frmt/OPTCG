import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { heart, supernovas } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { slash } from '../utils/attributes.cards';

export const op1_047 = new Card();
op1_047.serial_number = 'OP01-047';
op1_047.fr_name = 'Trafalgar Law';
op1_047.en_name = 'Trafalgar Law';
op1_047.jp_name = 'クロコダイル';
op1_047.power = 6000;
op1_047.cost = 5;
op1_047.fr_effect = "flemme de trad pour l'instant";
op1_047.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)' +
  '[On Play] You may return 1 of your Characters to your hand: Play 1 Character card with cost of 3 or less from your hand.';
op1_047.set = romanceDawn;
op1_047.type = character;
op1_047.colors = [green];
op1_047.tags = [supernovas, heart];
op1_047.status = unlimited;
op1_047.attribute = slash;
