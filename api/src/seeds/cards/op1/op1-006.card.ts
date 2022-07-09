import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { red } from '../utils/colors.cards';
import { special } from '../utils/attributes.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { wano } from '../utils/tags.cards';

export const op1_006 = new Card();
op1_006.serial_number = 'OP01-006';
op1_006.fr_name = 'Otama';
op1_006.en_name = 'Otama';
op1_006.jp_name = 'クロコダイル';
op1_006.power = 0;
op1_006.cost = 1;
op1_006.fr_effect = "flemme de trad pour l'instant";
op1_006.en_effect =
  "[On Play] Give 1 of your opponent's Characters -2000 Power this turn.";
op1_006.set = romanceDawn;
op1_006.type = character;
op1_006.colors = [red];
op1_006.tags = [wano];
op1_006.rarities = [uncommon];
op1_006.status = unlimited;
op1_006.attribute = special;
