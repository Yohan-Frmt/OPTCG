import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { heart } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const op1_050 = new Card();
op1_050.serial_number = 'OP01-050';
op1_050.fr_name = 'Penguin';
op1_050.en_name = 'Penguin';
op1_050.jp_name = 'クロコダイル';
op1_050.power = 2000;
op1_050.cost = 3;
op1_050.fr_effect = "flemme de trad pour l'instant";
op1_050.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)' +
  '[On Play] If you do not control [Shachi], play 1 [Shachi] card from your hand.';
op1_050.set = romanceDawn;
op1_050.type = character;
op1_050.colors = [green];
op1_050.tags = [heart];
op1_050.rarities = [common];
op1_050.status = unlimited;
op1_050.attribute = strike;
