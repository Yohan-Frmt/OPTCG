import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { baroque } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { blue } from '../utils/colors.cards';
import { slash } from '../utils/attributes.cards';

export const op1_083 = new Card();
op1_083.serial_number = 'OP01-083';
op1_083.fr_name = 'Mr. 1 (Daz Bones)';
op1_083.en_name = 'Mr. 1 (Daz Bones)';
op1_083.jp_name = 'クロコダイル';
op1_083.power = 3000;
op1_083.cost = 2;
op1_083.fr_effect = "flemme de trad pour l'instant";
op1_083.en_effect =
  '[DON!! x1] [During Your Turn] If your Leader has the {Baroque Works} type, this Character gains +1000 Power for every 2 Event cards in your Trash.';
op1_083.set = romanceDawn;
op1_083.type = character;
op1_083.colors = [blue];
op1_083.tags = [baroque];
op1_083.rarities = [uncommon];
op1_083.status = unlimited;
op1_083.attribute = slash;
