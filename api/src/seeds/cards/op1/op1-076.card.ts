import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { dressrosa } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { common } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const op1_076 = new Card();
op1_076.serial_number = 'OP01-076';
op1_076.fr_name = 'Bellamy';
op1_076.en_name = 'Bellamy';
op1_076.jp_name = 'クロコダイル';
op1_076.power = 4000;
op1_076.cost = 2;
op1_076.set = romanceDawn;
op1_076.type = character;
op1_076.colors = [blue];
op1_076.tags = [dressrosa];
op1_076.rarities = [common];
op1_076.status = unlimited;
op1_076.attribute = strike;
