import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { common } from '../utils/rarities.cards';
import { starterAnimal } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { purple } from '../utils/colors.cards';
import { beast } from '../utils/tags.cards';

export const st4_014 = new Card();
st4_014.serial_number = 'ST04-014';
st4_014.fr_name = 'Lead Performer "Disaster"';
st4_014.en_name = 'Lead Performer "Disaster"';
st4_014.jp_name = 'クロコダイル';
st4_014.cost = 4;
st4_014.fr_effect = "flemme de trad pour l'instant";
st4_014.en_effect =
  '[Main] Draw 1 card, then add 1 card from your DON!! deck and set it as active.';
st4_014.fr_trigger_effect = "flemme de trad pour l'instant";
st4_014.en_trigger_effect = "[Trigger] Activate this card's [Main] effect.";
st4_014.set = starterAnimal;
st4_014.type = event;
st4_014.colors = [purple];
st4_014.tags = [beast];
st4_014.rarities = [common];
st4_014.status = unlimited;
