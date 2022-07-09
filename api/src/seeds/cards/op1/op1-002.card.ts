import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { heart, supernovas } from '../utils/tags.cards';
import { green, red } from '../utils/colors.cards';
import { leader } from '../utils/types.cards';
import { romanceDawn } from '../utils/sets.cards';
import { leaderRare } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const op1_002 = new Card();
op1_002.serial_number = 'OP01-002';
op1_002.fr_name = 'Trafalgar Law';
op1_002.en_name = 'Trafalgar Law';
op1_002.jp_name = 'クロコダイル';
op1_002.power = 5000;
op1_002.life = 4;
op1_002.fr_effect = "flemme de trad pour l'instant";
op1_002.en_effect =
  '[Activate: Main] [Once Per Turn] (2) (You may rest the specified number of DON!! cards in your Cost Area): If you control 5 Characters, return 1 of your Characters to the owners hand, then play 1 cost 5 or lower Character of a different color as the returned Character from your hand.';
op1_002.set = romanceDawn;
op1_002.type = leader;
op1_002.colors = [red, green];
op1_002.tags = [supernovas, heart];
op1_002.rarities = [leaderRare];
op1_002.status = unlimited;
op1_002.attribute = slash;
