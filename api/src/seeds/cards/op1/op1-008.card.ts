import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { beautiful, supernovas } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const op1_008 = new Card();
op1_008.serial_number = 'OP01-008';
op1_008.fr_name = 'Cavendish';
op1_008.en_name = 'Cavendish';
op1_008.jp_name = 'クロコダイル';
op1_008.power = 5000;
op1_008.cost = 4;
op1_008.fr_effect = "flemme de trad pour l'instant";
op1_008.en_effect =
  '[On Play] You may return 1 of your Life cards to your hand: This Character gains [Rush] during this turn. (This Character can attack the turn it comes into play.)';
op1_008.set = romanceDawn;
op1_008.type = character;
op1_008.colors = [red];
op1_008.tags = [supernovas, beautiful];
op1_008.rarities = [common];
op1_008.status = unlimited;
op1_008.attribute = slash;
