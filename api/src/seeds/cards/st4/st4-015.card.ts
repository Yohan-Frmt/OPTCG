import { Card } from '../../../cards/card/card.entity';
import { event } from '../utils/types.cards';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { starterAnimal } from '../utils/sets.cards';
import { purple } from '../utils/colors.cards';
import { beast } from '../utils/tags.cards';

export const st4_015 = new Card();
st4_015.serial_number = 'ST04-015';
st4_015.fr_name = 'Brachio Bomber';
st4_015.en_name = 'Brachio Bomber';
st4_015.jp_name = 'クロコダイル';
st4_015.cost = 6;
st4_015.fr_effect = "flemme de trad pour l'instant";
st4_015.en_effect =
  "[Main] K.O. 1 of your opponent's Characters with a cost 6 or less, then add 1 DON!! card from your DON!! deck and set it as active. and set it as active.";
st4_015.fr_trigger_effect = "flemme de trad pour l'instant";
st4_015.en_trigger_effect =
  '[Trigger] Add 1 DON!! card from your DON!! Deck and set it as active.';
st4_015.set = starterAnimal;
st4_015.type = event;
st4_015.colors = [purple];
st4_015.tags = [beast];
st4_015.rarities = [common];
st4_015.status = unlimited;
