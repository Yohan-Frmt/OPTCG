import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat, supernovas } from '../utils/tags.cards';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { strike } from '../utils/attributes.cards';

export const op1_024 = new Card();
op1_024.serial_number = 'OP01-024';
op1_024.fr_name = 'Monkey D. Luffy';
op1_024.en_name = 'Monkey D. Luffy';
op1_024.jp_name = 'クロコダイル';
op1_024.power = 3000;
op1_024.cost = 2;
op1_024.fr_effect = "flemme de trad pour l'instant";
op1_024.en_effect =
  "[DON!! x2] This Character cannot be K.O.'d when battling (Strike) Attribute Characters." +
  '[Activate: Main] [Once Per Turn] Give this Character 2 rested DON!! cards.';
op1_024.set = romanceDawn;
op1_024.type = character;
op1_024.colors = [red];
op1_024.tags = [supernovas, strawHat];
op1_024.status = unlimited;
op1_024.attribute = strike;
