import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { rare } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const op1_013 = new Card();
op1_013.serial_number = 'OP01-013';
op1_013.fr_name = 'Sanji';
op1_013.en_name = 'Sanji';
op1_013.jp_name = 'クロコダイル';
op1_013.power = 3000;
op1_013.cost = 2;
op1_013.fr_effect = "flemme de trad pour l'instant";
op1_013.en_effect =
  '[Activate: Main] [Once Per Turn] (Take 1 Life card and put it in your hand): This Character gains +2000 Power this turn. Then, give this character up to 2 of your rested DON!!.';
op1_013.set = romanceDawn;
op1_013.type = character;
op1_013.colors = [red];
op1_013.tags = [strawHat];
op1_013.rarities = [rare];
op1_013.status = unlimited;
op1_013.attribute = strike;
