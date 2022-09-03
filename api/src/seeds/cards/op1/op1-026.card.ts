import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat, supernovas } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { rare } from '../utils/rarities.cards';
import { event } from '../utils/types.cards';

export const op1_026 = new Card();
op1_026.serial_number = 'OP01-026';
op1_026.fr_name = 'Gum-Gum Red Hawk';
op1_026.en_name = 'Gum-Gum Red Hawk';
op1_026.jp_name = 'クロコダイル';
op1_026.cost = 2;
op1_026.fr_effect = "flemme de trad pour l'instant";
op1_026.en_effect =
  "[Counter] Your Leader or 1 of your Characters gains +4000 Power during this battle.. Then, K.O. 1 of your opponent's Characters with 4000 Power or less.";
op1_026.fr_trigger_effect = "flemme de trad pour l'instant";
op1_026.en_trigger_effect =
  "Your opponent's Leader or 1 of their Characters loses 10000 Power until the end of the turn.";
op1_026.set = romanceDawn;
op1_026.type = event;
op1_026.colors = [red];
op1_026.tags = [supernovas, strawHat];
op1_026.rarities = [rare];
op1_026.status = unlimited;
