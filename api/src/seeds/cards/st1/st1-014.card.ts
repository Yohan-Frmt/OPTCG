import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { animal, strawHat } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st1_014 = new Card();
st1_014.serial_number = 'ST01-014';
st1_014.fr_name = 'Guard Point';
st1_014.en_name = 'Guard Point';
st1_014.jp_name = 'アームポイント';
st1_014.cost = 1;
st1_014.fr_effect =
  '[Counter] Pendant cette attaque, votre Leader ou un de vos Personnages gagne +3000 de Puissance.';
st1_014.en_effect =
  '[Counter] Your Leader or one of your Characters gains +3000 Power during this battle.';
st1_014.set = starterStraw;
st1_014.type = event;
st1_014.colors = [red];
st1_014.tags = [strawHat, animal];
st1_014.rarities = [common];
st1_014.status = unlimited;
