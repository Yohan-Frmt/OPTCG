import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { rare } from '../utils/rarities.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { ranged } from '../utils/attributes.cards';

export const op1_004 = new Card();
op1_004.serial_number = 'OP01-004';
op1_004.fr_name = 'Usopp';
op1_004.en_name = 'Usopp';
op1_004.jp_name = 'クロコダイル';
op1_004.power = 3000;
op1_004.cost = 2;
op1_004.fr_effect = "flemme de trad pour l'instant";
op1_004.en_effect =
  '[DON!! x1] [Your Turn] [Once Per Turn] When your opponent activates an Event, draw 1 card.';
op1_004.set = romanceDawn;
op1_004.type = character;
op1_004.colors = [red];
op1_004.tags = [strawHat];
op1_004.rarities = [rare];
op1_004.status = unlimited;
op1_004.attribute = ranged;
