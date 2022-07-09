import { Card } from '../../../cards/card/card.entity';
import { promotion } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { baroque, warlord } from '../utils/tags.cards';
import { promotionRare } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';

export const p_004 = new Card();
p_004.serial_number = 'P-004';
p_004.fr_name = 'Crocodile';
p_004.en_name = 'Crocodile';
p_004.jp_name = 'サンジ';
p_004.power = 5000;
p_004.cost = 4;
p_004.counter = 1000;
p_004.fr_effect = 'flemme de traduire cette carte';
p_004.en_effect =
  '[DON!! x1] This Character gains [Blocker].' +
  '(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)';
p_004.set = promotion;
p_004.type = character;
p_004.colors = [blue];
p_004.tags = [warlord, baroque];
p_004.rarities = [promotionRare];
p_004.status = unlimited;
p_004.attribute = special;
