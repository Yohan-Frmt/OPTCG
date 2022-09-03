import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { red } from '../utils/colors.cards';
import { beautiful, supernovas } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { common } from '../utils/rarities.cards';
import { event } from '../utils/types.cards';

export const op1_027 = new Card();
op1_027.serial_number = 'OP01-027';
op1_027.fr_name = 'Round Table';
op1_027.en_name = 'Round Table';
op1_027.jp_name = 'クロコダイル';
op1_027.cost = 4;
op1_027.fr_effect = "flemme de trad pour l'instant";
op1_027.en_effect =
  "[Main] Give 1 of your opponent's Characters -10000 Power during this turn.";
op1_027.set = romanceDawn;
op1_027.type = event;
op1_027.colors = [red];
op1_027.tags = [supernovas, beautiful];
op1_027.rarities = [common];
op1_027.status = unlimited;
