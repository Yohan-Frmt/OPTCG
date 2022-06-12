import { Card } from '../../cards/card/card.entity';
import { romance_dawn } from './utils/sets.cards';
import { leader } from './utils/types.cards';
import { red } from './utils/colors.cards';
import { unlimited } from './utils/status.cards';
import { strawHatPirates } from './utils/tags.cards';
import { leaderRare } from './utils/rarities.cards';

export const st1_001 = new Card();

st1_001.serial_number = 'ST01-001';
st1_001.fr_name = 'Monkey D. Luffy';
st1_001.en_name = 'Monkey D. Luffy';
st1_001.jp_name = 'モンキー・D.ルフィ';
st1_001.power = 5000;
st1_001.life = 5;
st1_001.fr_effect =
  '[Activation : Principale][DON!! -3] Une fois par tour, pour le restant du tour, cette carte gagne +5000 de puissance.';
st1_001.en_effect =
  '[Activation : Main][DON!! -3] Once per turn, for the rest of this turn, +5000 power to this card.';
st1_001.set = romance_dawn;
st1_001.type = leader;
st1_001.colors = [red];
st1_001.tags = [strawHatPirates];
st1_001.rarities = [leaderRare];
st1_001.status = unlimited;
