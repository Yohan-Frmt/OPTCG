import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { rare } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const op1_017 = new Card();
op1_017.serial_number = 'OP01-017';
op1_017.fr_name = 'Nico Robin';
op1_017.en_name = 'Nico Robin';
op1_017.jp_name = 'クロコダイル';
op1_017.power = 4000;
op1_017.cost = 3;
op1_017.fr_effect = "flemme de trad pour l'instant";
op1_017.en_effect =
  "[DON!! x1] [When Attacking] K.O. 1 of your opponent's Characters with 3000 Power or less. ";
op1_017.set = romanceDawn;
op1_017.type = character;
op1_017.colors = [red];
op1_017.tags = [strawHat];
op1_017.rarities = [rare];
op1_017.status = unlimited;
op1_017.attribute = strike;
