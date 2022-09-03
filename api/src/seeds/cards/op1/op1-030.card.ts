import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { event } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { uncommon } from '../utils/rarities.cards';
import { strawHat } from '../utils/tags.cards';

export const op1_030 = new Card();
op1_030.serial_number = 'OP01-030';
op1_030.fr_name = 'In 2 Years!!! To Sabaody!!!';
op1_030.en_name = 'In 2 Years!!! To Sabaody!!!';
op1_030.jp_name = 'クロコダイル';
op1_030.cost = 1;
op1_030.fr_effect = "flemme de trad pour l'instant";
op1_030.en_effect =
  '[Main] Look at the top 5 cards of your deck, reveal 1 {Straw Hat Crew} type Character among them and add it to your hand. Place the remaining cards at the bottom of your deck in any order.';
op1_030.fr_trigger_effect = "flemme de trad pour l'instant";
op1_030.en_trigger_effect = 'Activate this cards [Main] effect.';
op1_030.set = romanceDawn;
op1_030.type = event;
op1_030.colors = [red];
op1_030.tags = [strawHat];
op1_030.rarities = [uncommon];
op1_030.status = unlimited;
