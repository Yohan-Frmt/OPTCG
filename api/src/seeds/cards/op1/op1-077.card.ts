import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { thriller } from '../utils/tags.cards';
import { special } from '../utils/attributes.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { blue } from '../utils/colors.cards';

export const op1_077 = new Card();
op1_077.serial_number = 'OP01-077';
op1_077.fr_name = 'Perona';
op1_077.en_name = 'Perona';
op1_077.jp_name = 'クロコダイル';
op1_077.power = 2000;
op1_077.cost = 1;
op1_077.fr_effect = "flemme de trad pour l'instant";
op1_077.en_effect =
  '[On Play] Look at the top 5 cards of your deck, rearrange them in any order, then place them at the top or bottom of your deck.';
op1_077.set = romanceDawn;
op1_077.type = character;
op1_077.colors = [blue];
op1_077.tags = [thriller];
op1_077.rarities = [uncommon];
op1_077.status = unlimited;
op1_077.attribute = special;
