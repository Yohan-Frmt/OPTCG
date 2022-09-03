import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { stage } from '../utils/types.cards';
import { beast } from '../utils/tags.cards';

export const st4_017 = new Card();
st4_017.serial_number = 'ST04-017';
st4_017.fr_name = 'Onigashima Island';
st4_017.en_name = 'Onigashima Island';
st4_017.jp_name = 'クロコダイル';
st4_017.cost = 3;
st4_017.fr_effect = "flemme de trad pour l'instant";
st4_017.en_effect =
  '[Activate: Main] You may rest this Stage: If your Leader has the {Animal Kingdom Pirates} type, add 1 DON!! card from your DON!! deck and rest it.';
st4_017.set = starterAnimal;
st4_017.type = stage;
st4_017.colors = [purple];
st4_017.tags = [beast];
st4_017.rarities = [common];
st4_017.status = unlimited;
