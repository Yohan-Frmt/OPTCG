import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { green } from '../utils/colors.cards';
import { scabbards, wano } from '../utils/tags.cards';
import { character } from '../utils/types.cards';
import { slash } from '../utils/attributes.cards';

export const op1_040 = new Card();
op1_040.serial_number = 'OP01-040';
op1_040.fr_name = "Kin'emon";
op1_040.en_name = "Kin'emon";
op1_040.jp_name = 'クロコダイル';
op1_040.power = 6000;
op1_040.cost = 6;
op1_040.fr_effect = "flemme de trad pour l'instant";
op1_040.en_effect =
  '[On Play] If your Leader is [Kozuki Oden], you can play 1 cost 3 or lower {Nine Red Scabbards} type Character card from your hand.' +
  '[DON!! x1] [When attacking] [Once per turn] Set 1 of your cost 3 or lower {Nine Red Scabbards} type Characters as active.';
op1_040.set = romanceDawn;
op1_040.type = character;
op1_040.colors = [green];
op1_040.tags = [wano, scabbards];
op1_040.status = unlimited;
op1_040.attribute = slash;
