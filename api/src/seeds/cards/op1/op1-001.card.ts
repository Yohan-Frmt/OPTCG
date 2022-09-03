import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { red } from '../utils/colors.cards';
import { leader } from '../utils/types.cards';
import { romanceDawn } from '../utils/sets.cards';
import { leaderRare } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';
import { strawHat, supernovas } from '../utils/tags.cards';

export const op1_001 = new Card();
op1_001.serial_number = 'OP01-001';
op1_001.fr_name = 'Roronoa Zoro';
op1_001.en_name = 'Roronoa Zoro';
op1_001.jp_name = 'クロコダイル';
op1_001.power = 5000;
op1_001.life = 5;
op1_001.fr_effect = "flemme de trad pour l'instant";
op1_001.en_effect =
  '[DON!! x1] [Your Turn] All your Characters gain +1000 Power.';
op1_001.set = romanceDawn;
op1_001.type = leader;
op1_001.colors = [red];
op1_001.tags = [supernovas, strawHat];
op1_001.rarities = [leaderRare];
op1_001.status = unlimited;
op1_001.attribute = slash;
