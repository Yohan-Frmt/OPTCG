import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHatPirates } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st1_011 = new Card();
st1_011.serial_number = 'ST01-011';
st1_011.fr_name = 'Brook';
st1_011.en_name = 'Brook';
st1_011.jp_name = 'ブルック';
st1_011.power = 3000;
st1_011.cost = 2;
st1_011.counter = 2000;
st1_011.fr_effect =
  '[En jeu] Donnez à votre Leader ou à un de vos personnages deux cartes DON!! au repos.';
st1_011.en_effect =
  '[On Play] Give your Leader or one of your Characters two rested DON!! cards.';
st1_011.set = starterStraw;
st1_011.type = character;
st1_011.colors = [red];
st1_011.tags = [strawHatPirates];
st1_011.rarities = [common];
st1_011.status = unlimited;
