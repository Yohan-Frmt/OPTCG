import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { emperors, redhair } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { slash } from '../utils/attributes.cards';
import { specialRare } from '../utils/rarities.cards';

export const op1_120 = new Card();
op1_120.serial_number = 'OP01-120';
op1_120.fr_name = 'Shanks';
op1_120.en_name = 'Shanks';
op1_120.jp_name = 'クロコダイル';
op1_120.power = 10000;
op1_120.cost = 9;
op1_120.fr_effect = "flemme de trad pour l'instant";
op1_120.en_effect =
  '[Rush] (This card can attack on the turn it is played.)' +
  '[When Attacking] During this battle, your opponent can not activate [Blocker] of Characters with 2000 power or less.';
op1_120.set = romanceDawn;
op1_120.type = character;
op1_120.colors = [red];
op1_120.tags = [emperors, redhair];
op1_120.rarities = [specialRare];
op1_120.status = unlimited;
op1_120.attribute = slash;
