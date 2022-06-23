import { Card } from '../../../cards/card/card.entity';
import { leader } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHatPirates, worstPirates } from '../utils/tags.cards';
import { leaderRare } from '../utils/rarities.cards';
import { starterStraw } from '../utils/sets.cards';

export const st1_001 = new Card();
st1_001.serial_number = 'ST01-001';
st1_001.fr_name = 'Monkey D. Luffy';
st1_001.en_name = 'Monkey D. Luffy';
st1_001.jp_name = 'モンキー・D・ルフィ';
st1_001.power = 5000;
st1_001.life = 5;
st1_001.fr_effect =
  '[Activation : Principale] [Une fois par tour] Donner à votre Leader ou un de vos Personnage une carte DON!! au repos.';
st1_001.en_effect =
  '[Activation : Main] [Once per turn] Give this Leader or one of your Character one rested DON!! card.';
st1_001.set = starterStraw;
st1_001.type = leader;
st1_001.colors = [red];
st1_001.tags = [strawHatPirates, worstPirates];
st1_001.rarities = [leaderRare];
st1_001.status = unlimited;
