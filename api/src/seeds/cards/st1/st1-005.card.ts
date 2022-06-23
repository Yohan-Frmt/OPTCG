import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { fishMan, strawHatPirates } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st1_005 = new Card();
st1_005.serial_number = 'ST01-005';
st1_005.fr_name = 'Jinbe';
st1_005.en_name = 'Jinbe';
st1_005.jp_name = 'ジンベ';
st1_005.power = 5000;
st1_005.cost = 3;
st1_005.fr_effect =
  "[DON!! x1] [A l'attaque] Pendant ce tour, votre Leader ou un de vos autres Personnages gagne +1000 de Puissance";
st1_005.en_effect =
  '[DON!! x1] [When Attacking] Your Leader or one of your Characters other than this card gains +1000 Power during this turn';
st1_005.set = starterStraw;
st1_005.type = character;
st1_005.colors = [red];
st1_005.tags = [strawHatPirates, fishMan];
st1_005.rarities = [common];
st1_005.status = unlimited;
