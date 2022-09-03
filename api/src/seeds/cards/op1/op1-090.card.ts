import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { event } from '../utils/types.cards';
import { baroque } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { uncommon } from '../utils/rarities.cards';
import { blue } from '../utils/colors.cards';

export const op1_090 = new Card();
op1_090.serial_number = 'OP01-090';
op1_090.fr_name = 'Baroque Works';
op1_090.en_name = 'Baroque Works';
op1_090.jp_name = 'クロコダイル';
op1_090.cost = 1;
op1_090.fr_effect = "flemme de trad pour l'instant";
op1_090.en_effect =
  '[Main] Look at the top 5 cards of your deck, reveal 1 {Baroque Works} type card among them other than [Baroque Works] and add it to your hand. Place the remaining cards at the bottom of your deck in any order.';
op1_090.set = romanceDawn;
op1_090.type = event;
op1_090.colors = [blue];
op1_090.tags = [baroque];
op1_090.rarities = [uncommon];
op1_090.status = unlimited;
