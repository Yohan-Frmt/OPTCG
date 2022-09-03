import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { buggy } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const op1_064 = new Card();
op1_064.serial_number = 'OP01-064';
op1_064.fr_name = 'Alvida';
op1_064.en_name = 'Alvida';
op1_064.jp_name = 'クロコダイル';
op1_064.power = 3000;
op1_064.cost = 2;
op1_064.fr_effect = "flemme de trad pour l'instant";
op1_064.en_effect =
  "[DON!! x1] [When Attacking] You may discard 1 card from your hand: Return 1 of your opponent's Characters with a cost of 3 or less to their hand.";
op1_064.set = romanceDawn;
op1_064.type = character;
op1_064.colors = [blue];
op1_064.tags = [buggy];
op1_064.rarities = [common];
op1_064.status = unlimited;
op1_064.attribute = strike;
