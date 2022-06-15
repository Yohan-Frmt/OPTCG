import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHatPirates } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st1_007 = new Card();
st1_007.serial_number = 'ST01-007';
st1_007.fr_name = 'Nami';
st1_007.en_name = 'Nami';
st1_007.jp_name = 'ナミ';
st1_007.power = 1000;
st1_007.cost = 1;
st1_007.fr_effect =
  '[Activation : Principale] [Une fois par tour] Donnez à votre Leader ou un de vos Personnages une carte DON!! au repos.';
st1_007.en_effect =
  '[Activate : Main] [Once per turn] Give your Leader or one of your Character one rested DON!! card.';
st1_007.set = starterStraw;
st1_007.type = character;
st1_007.colors = [red];
st1_007.tags = [strawHatPirates];
st1_007.rarities = [common];
st1_007.status = unlimited;
