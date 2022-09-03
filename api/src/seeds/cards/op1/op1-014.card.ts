import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { fishMan, strawHat } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { wisdom } from '../utils/attributes.cards';
import { red } from '../utils/colors.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';

export const op1_014 = new Card();
op1_014.serial_number = 'OP01-014';
op1_014.fr_name = 'Jinbe';
op1_014.en_name = 'Jinbe';
op1_014.jp_name = 'クロコダイル';
op1_014.power = 5000;
op1_014.cost = 4;
op1_014.fr_effect = "flemme de trad pour l'instant";
op1_014.en_effect =
  '[Blocker] (When your opponent declares an attack, you may rest this card to make it the new target of the attack.)' +
  '[DON!! x1] [When Blocking] You may play a Red Character card that costs 2 or less from your hand.';
op1_014.set = romanceDawn;
op1_014.type = character;
op1_014.colors = [red];
op1_014.tags = [fishMan, strawHat];
op1_014.rarities = [uncommon];
op1_014.status = unlimited;
op1_014.attribute = wisdom;
