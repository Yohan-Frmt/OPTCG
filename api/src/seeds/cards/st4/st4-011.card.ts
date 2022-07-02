import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { special } from '../utils/attributes.cards';
import { purple } from '../utils/colors.cards';
import { starterAnimal } from '../utils/sets.cards';
import { beast } from '../utils/tags.cards';

export const st4_011 = new Card();
st4_011.serial_number = 'ST04-011';
st4_011.fr_name = 'Black Maria';
st4_011.en_name = 'Black Maria';
st4_011.jp_name = 'クロコダイル';
st4_011.power = 2000;
st4_011.cost = 2;
st4_011.fr_effect = "flemme de trad pour l'instant";
st4_011.en_effect =
  '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)';
st4_011.set = starterAnimal;
st4_011.type = character;
st4_011.colors = [purple];
st4_011.tags = [beast];
st4_011.rarities = [common];
st4_011.status = unlimited;
st4_011.attribute = special;
