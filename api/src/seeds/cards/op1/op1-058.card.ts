import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { green } from '../utils/colors.cards';
import { kid, supernovas } from '../utils/tags.cards';
import { rare } from '../utils/rarities.cards';
import { event } from '../utils/types.cards';

export const op1_058 = new Card();
op1_058.serial_number = 'OP01-058';
op1_058.fr_name = 'Punk Gibson';
op1_058.en_name = 'Punk Gibson';
op1_058.jp_name = 'クロコダイル';
op1_058.cost = 2;
op1_058.fr_effect = "flemme de trad pour l'instant";
op1_058.en_effect =
  "[Counter] Your Leader or 1 of your Characters gains +4000 Power during this battle. Then, rest 1 of your opponent's Characters with a cost of 4 or less.";
op1_058.fr_trigger_effect = "flemme de trad pour l'instant";
op1_058.en_trigger_effect = "Rest 1 of your opponent's Characters.";
op1_058.set = romanceDawn;
op1_058.type = event;
op1_058.colors = [green];
op1_058.tags = [supernovas, kid];
op1_058.rarities = [rare];
op1_058.status = unlimited;
