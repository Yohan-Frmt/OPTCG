import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { beast, smile } from '../utils/tags.cards';
import { special } from '../utils/attributes.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { common } from '../utils/rarities.cards';
import { purple } from '../utils/colors.cards';

export const op1_113 = new Card();
op1_113.serial_number = 'OP01-113';
op1_113.fr_name = 'Holdem';
op1_113.en_name = 'Holdem';
op1_113.jp_name = 'クロコダイル';
op1_113.power = 4000;
op1_113.cost = 3;
op1_113.fr_effect = "flemme de trad pour l'instant";
op1_113.en_effect =
  '[On K.O.] Add 1 DON!! card from your DON!! deck to your Cost Area rested.';
op1_113.set = romanceDawn;
op1_113.type = character;
op1_113.colors = [purple];
op1_113.tags = [beast, smile];
op1_113.rarities = [common];
op1_113.status = unlimited;
op1_113.attribute = special;
