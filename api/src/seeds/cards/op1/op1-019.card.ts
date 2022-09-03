import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { red } from '../utils/colors.cards';
import { special } from '../utils/attributes.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { barto, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const op1_019 = new Card();
op1_019.serial_number = 'OP01-019';
op1_019.fr_name = 'Bartolomeo';
op1_019.en_name = 'Bartolomeo';
op1_019.jp_name = 'クロコダイル';
op1_019.power = 2000;
op1_019.cost = 2;
op1_019.fr_effect = "flemme de trad pour l'instant";
op1_019.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)' +
  '[DON!! x2] During Opponents Turn This Character gains +3000';
op1_019.set = romanceDawn;
op1_019.type = character;
op1_019.colors = [red];
op1_019.tags = [supernovas, barto];
op1_019.rarities = [common];
op1_019.status = unlimited;
op1_019.attribute = special;
