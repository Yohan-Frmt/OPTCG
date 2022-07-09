import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { ranged } from '../utils/attributes.cards';

export const op1_021 = new Card();
op1_021.serial_number = 'OP01-021';
op1_021.fr_name = 'Franky';
op1_021.en_name = 'Franky';
op1_021.jp_name = 'クロコダイル';
op1_021.power = 4000;
op1_021.cost = 3;
op1_021.fr_effect = "flemme de trad pour l'instant";
op1_021.en_effect =
  "[DON!! x1] This Character can attack your opponent's active Characters.";
op1_021.set = romanceDawn;
op1_021.type = character;
op1_021.colors = [red];
op1_021.tags = [strawHat];
op1_021.rarities = [uncommon];
op1_021.status = unlimited;
op1_021.attribute = ranged;
