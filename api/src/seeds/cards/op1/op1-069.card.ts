import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { special } from '../utils/attributes.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { punk, science } from '../utils/tags.cards';
import { rare } from '../utils/rarities.cards';

export const op1_069 = new Card();
op1_069.serial_number = 'OP01-069';
op1_069.fr_name = 'Caesar Clown';
op1_069.en_name = 'Caesar Clown';
op1_069.jp_name = 'クロコダイル';
op1_069.power = 5000;
op1_069.cost = 4;
op1_069.fr_effect = "flemme de trad pour l'instant";
op1_069.en_effect =
  '[On K.O.] Play 1 [Smiley] from your deck, then shuffle your deck.';
op1_069.set = romanceDawn;
op1_069.type = character;
op1_069.colors = [blue];
op1_069.tags = [science, punk];
op1_069.rarities = [rare];
op1_069.status = unlimited;
op1_069.attribute = special;
