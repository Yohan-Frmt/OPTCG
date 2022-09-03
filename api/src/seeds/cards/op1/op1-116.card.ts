import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { event } from '../utils/types.cards';
import { beast } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { uncommon } from '../utils/rarities.cards';
import { purple } from '../utils/colors.cards';

export const op1_116 = new Card();
op1_116.serial_number = 'OP01-116';
op1_116.fr_name = 'Artificial Devil Fruit SMILE';
op1_116.en_name = 'Artificial Devil Fruit SMILE';
op1_116.jp_name = 'クロコダイル';
op1_116.cost = 2;
op1_116.fr_effect = "flemme de trad pour l'instant";
op1_116.en_effect =
  '[Main] Look at the top 5 cards of your deck and reveal 1 {SMILE} type Character card with a cost of 3 or less among them and play it. Place the remaining cards at the bottom of the deck in any order.';
op1_116.fr_trigger_effect = "flemme de trad pour l'instant";
op1_116.en_trigger_effect = 'Activate this [Main] effect.';
op1_116.set = romanceDawn;
op1_116.type = event;
op1_116.colors = [purple];
op1_116.tags = [beast];
op1_116.rarities = [uncommon];
op1_116.status = unlimited;
