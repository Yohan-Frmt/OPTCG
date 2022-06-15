import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { stage } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHatPirates } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st1_017 = new Card();
st1_017.serial_number = 'ST01-017';
st1_017.fr_name = 'Thousand Sunny\n';
st1_017.en_name = 'Thousand Sunny';
st1_017.jp_name = 'サウザンドサニー号';
st1_017.cost = 2;
st1_017.fr_effect =
  '[Activation : Principale] Vous pouvez mettre ce Terrain au repos : Pendant ce tour, un Leader ou Personnage avec ~Équipage au chapeau de paille~ sur votre champ de bataille gagne +1000 de Puissance.';
st1_017.en_effect =
  '[Activate : Main] You may rest this Stage: one Leader or Character with ~Equipment on the straw hat~ on your field gains +1000 Power during this turn.';
st1_017.set = starterStraw;
st1_017.type = stage;
st1_017.colors = [red];
st1_017.tags = [strawHatPirates];
st1_017.rarities = [common];
st1_017.status = unlimited;
