import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { wano } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const op1_020 = new Card();
op1_020.serial_number = 'OP01-020';
op1_020.fr_name = 'Hyogoro';
op1_020.en_name = 'Hyogoro';
op1_020.jp_name = 'クロコダイル';
op1_020.power = 3000;
op1_020.cost = 2;
op1_020.fr_effect = "flemme de trad pour l'instant";
op1_020.en_effect =
  '[Counter] +1000' +
  '[Activate: Main] You can rest this Character: Your Leader or 1 of your Characters gains +2000 Power during this turn.';
op1_020.set = romanceDawn;
op1_020.type = character;
op1_020.colors = [red];
op1_020.tags = [wano];
op1_020.rarities = [common];
op1_020.status = unlimited;
op1_020.attribute = strike;
