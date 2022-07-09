import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { beast, emperors } from '../utils/tags.cards';
import { purple } from '../utils/colors.cards';
import { superRare } from '../utils/rarities.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { strike } from '../utils/attributes.cards';

export const op1_094 = new Card();
op1_094.serial_number = 'OP01-094';
op1_094.fr_name = 'Kaido';
op1_094.en_name = 'Kaido';
op1_094.jp_name = 'クロコダイル';
op1_094.power = 12000;
op1_094.cost = 10;
op1_094.fr_effect = "flemme de trad pour l'instant";
op1_094.en_effect =
  '[On Play] DON!!-6 (You may return the specified number of DON!! cards from your field to your DON!! deck): If your leader has the {Animal Kingdom Pirates} type, K.O. all Characters other than this one.';
op1_094.set = romanceDawn;
op1_094.type = character;
op1_094.colors = [purple];
op1_094.tags = [emperors, beast];
op1_094.rarities = [superRare];
op1_094.status = unlimited;
op1_094.attribute = strike;
