import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { beast, emperors } from '../utils/tags.cards';
import { leader } from '../utils/types.cards';
import { romanceDawn } from '../utils/sets.cards';
import { blue, purple } from '../utils/colors.cards';
import { strike } from '../utils/attributes.cards';
import { leaderRare } from '../utils/rarities.cards';

export const op1_061 = new Card();
op1_061.serial_number = 'OP01-061';
op1_061.fr_name = 'Kaido';
op1_061.en_name = 'Kaido';
op1_061.jp_name = 'クロコダイル';
op1_061.power = 5000;
op1_061.life = 4;
op1_061.fr_effect = "flemme de trad pour l'instant";
op1_061.en_effect =
  "[DON!! x1] [During Your Turn] [Once Per Turn] When one of your opponent's Characters is K.O.'d, you can add 1 DON!! card from your DON!! deck and set it as active.";
op1_061.set = romanceDawn;
op1_061.type = leader;
op1_061.colors = [blue, purple];
op1_061.tags = [emperors, beast];
op1_061.rarities = [leaderRare];
op1_061.status = unlimited;
op1_061.attribute = strike;
