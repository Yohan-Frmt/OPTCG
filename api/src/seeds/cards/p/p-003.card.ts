import { Card } from '../../../cards/card/card.entity';
import { promotion } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { kid, supernovas } from '../utils/tags.cards';
import { promotionRare } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const p_003 = new Card();
p_003.serial_number = 'P-003';
p_003.fr_name = 'Eustass "Captain" Kid';
p_003.en_name = 'Eustass "Captain" Kid';
p_003.jp_name = 'カルー';
p_003.power = 4000;
p_003.cost = 3;
p_003.counter = 1000;
p_003.fr_effect = 'flemme de traduire cette carte';
p_003.en_effect =
  '[DON!! x2] This Character gains [Double Attack].' +
  '(This card deals 2 damage.)';
p_003.set = promotion;
p_003.type = character;
p_003.colors = [green];
p_003.tags = [supernovas, kid];
p_003.rarities = [promotionRare];
p_003.status = unlimited;
p_003.attribute = special;
