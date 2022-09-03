import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { minks, scabbards, wano } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const op1_048 = new Card();
op1_048.serial_number = 'OP01-048';
op1_048.fr_name = 'Cat Viper';
op1_048.en_name = 'Cat Viper';
op1_048.jp_name = 'クロコダイル';
op1_048.power = 3000;
op1_048.cost = 2;
op1_048.fr_effect = "flemme de trad pour l'instant";
op1_048.en_effect =
  "[On Play] Rest one of your opponent's characters that costs 3 or less.";
op1_048.set = romanceDawn;
op1_048.type = character;
op1_048.colors = [green];
op1_048.tags = [minks, wano, scabbards];
op1_048.rarities = [common];
op1_048.status = unlimited;
op1_048.attribute = slash;
