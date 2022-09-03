import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat, supernovas } from '../utils/tags.cards';
import { green, red } from '../utils/colors.cards';
import { leader } from '../utils/types.cards';
import { romanceDawn } from '../utils/sets.cards';
import { strike } from '../utils/attributes.cards';
import { leaderRare } from '../utils/rarities.cards';

export const op1_003 = new Card();
op1_003.serial_number = 'OP01-003';
op1_003.fr_name = 'Monkey D. Luffy';
op1_003.en_name = 'Monkey D. Luffy';
op1_003.jp_name = 'クロコダイル';
op1_003.power = 5000;
op1_003.life = 4;
op1_003.fr_effect = "flemme de trad pour l'instant";
op1_003.en_effect =
  '[Activate: Main] [Once Per Turn] (4) (Rest the specified number of DON!! cards in your Cost Area): Switch 1 of your Characters with the {supernovas} or {Straw Hat Crew} type with a cost of 5 or less to active, that Character gains +1000 Power during this turn.';
op1_003.set = romanceDawn;
op1_003.type = leader;
op1_003.colors = [red, green];
op1_003.tags = [supernovas, strawHat];
op1_003.rarities = [leaderRare];
op1_003.status = unlimited;
op1_003.attribute = strike;
