import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHatPirates } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st1_002 = new Card();
st1_002.serial_number = 'ST01-002';
st1_002.fr_name = 'Usopp';
st1_002.en_name = 'Usopp';
st1_002.jp_name = 'ウソップ';
st1_002.power = 2000;
st1_002.cost = 2;
st1_002.counter = 1000;
st1_002.fr_effect =
  "[DON!! x2] [A l'attaque] Durant cette bataille, votre adversaire ne peut pas activer de [bloqueur] sur un Personnage avec une puissance de 5000 ou plus. [Trigger] : Jouez cette carte";
st1_002.en_effect =
  '[DON!! x2] [When Attacking] Your opponent cannot activate [Blocker] on Characters with a Power of 5000 or more during this battle. [Trigger] : Play this card';
st1_002.set = starterStraw;
st1_002.type = character;
st1_002.colors = [red];
st1_002.tags = [strawHatPirates];
st1_002.rarities = [common];
st1_002.status = unlimited;
