import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { baroque } from '../utils/tags.cards';
import { special } from '../utils/attributes.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { blue } from '../utils/colors.cards';

export const op1_085 = new Card();
op1_085.serial_number = 'OP01-085';
op1_085.fr_name = 'Mr. 3 (Galdino)';
op1_085.en_name = 'Mr. 3 (Galdino)';
op1_085.jp_name = 'クロコダイル';
op1_085.power = 3000;
op1_085.cost = 2;
op1_085.fr_effect = "flemme de trad pour l'instant";
op1_085.en_effect =
  "[On Play] If your Leader has the {Baroque Works} type, choose 1 of your opponent's cost 4 or lower Characters. Until the end of your opponent's turn, the chosen Character cannot Attack.";
op1_085.set = romanceDawn;
op1_085.type = character;
op1_085.colors = [blue];
op1_085.tags = [baroque];
op1_085.rarities = [uncommon];
op1_085.status = unlimited;
op1_085.attribute = special;
