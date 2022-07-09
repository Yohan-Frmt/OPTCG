import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { specialRare } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';
import { wano } from '../utils/tags.cards';

export const op1_121 = new Card();
op1_121.serial_number = 'OP01-121';
op1_121.fr_name = 'Yamato';
op1_121.en_name = 'Yamato';
op1_121.jp_name = 'クロコダイル';
op1_121.power = 5000;
op1_121.cost = 5;
op1_121.fr_effect = "flemme de trad pour l'instant";
op1_121.en_effect =
  "This card's name is also treated as [Kozuki Oden]." +
  '[Double Attack] (This Character deals 2 damage when attacking a leader.)' +
  '[Banish] (When this card deals damage, the life card is trashed without activating [Trigger])';
op1_121.set = romanceDawn;
op1_121.type = character;
op1_121.colors = [green];
op1_121.tags = [wano];
op1_121.rarities = [specialRare];
op1_121.status = unlimited;
op1_121.attribute = strike;
