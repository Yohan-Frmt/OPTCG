import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { green } from '../utils/colors.cards';
import { slash } from '../utils/attributes.cards';
import { scabbards, wano } from '../utils/tags.cards';

export const op1_032 = new Card();
op1_032.serial_number = 'OP01-032';
op1_032.fr_name = 'Ashura Doji';
op1_032.en_name = 'Ashura Doji';
op1_032.jp_name = 'クロコダイル';
op1_032.power = 4000;
op1_032.cost = 3;
op1_032.fr_effect = "flemme de trad pour l'instant";
op1_032.en_effect =
  '[DON!! x1] If your opponent has at least 2 rested Characters, this Character gets +2000 Power.';
op1_032.set = romanceDawn;
op1_032.type = character;
op1_032.colors = [green];
op1_032.tags = [wano, scabbards];
op1_032.rarities = [uncommon];
op1_032.status = unlimited;
op1_032.attribute = slash;
