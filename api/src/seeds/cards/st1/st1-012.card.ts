import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHat, supernovas } from '../utils/tags.cards';
import { superRare } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const st1_012 = new Card();
st1_012.serial_number = 'ST01-012';
st1_012.fr_name = 'Monkey D. Luffy';
st1_012.en_name = 'Monkey D. Luffy';
st1_012.jp_name = 'モンキー・D・ルフィ';
st1_012.power = 6000;
st1_012.cost = 5;
st1_012.fr_effect =
  "[Ruée] [DON!! x2] [A l'attaque] Pendant cette attaque, votre adversaire de ne peut activer de [Bloqueur]";
st1_012.en_effect =
  '[Rush] [DON!! x2] [When Attacking] Your opponent cannot activate [Blocker] during this battle';
st1_012.set = starterStraw;
st1_012.type = character;
st1_012.colors = [red];
st1_012.tags = [strawHat, supernovas];
st1_012.rarities = [superRare];
st1_012.status = unlimited;
st1_012.attribute = strike;
