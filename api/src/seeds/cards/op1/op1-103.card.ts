import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { beast, onair } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { common } from '../utils/rarities.cards';
import { ranged } from '../utils/attributes.cards';
import { purple } from '../utils/colors.cards';

export const op1_103 = new Card();
op1_103.serial_number = 'OP01-103';
op1_103.fr_name = 'Scratchmen Apoo';
op1_103.en_name = 'Scratchmen Apoo';
op1_103.jp_name = 'クロコダイル';
op1_103.power = 6000;
op1_103.cost = 4;
op1_103.set = romanceDawn;
op1_103.type = character;
op1_103.colors = [purple];
op1_103.tags = [beast, onair];
op1_103.rarities = [common];
op1_103.status = unlimited;
op1_103.attribute = ranged;
