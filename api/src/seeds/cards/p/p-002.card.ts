import { Card } from '../../../cards/card/card.entity';
import { promotion } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { promotionRare } from '../utils/rarities.cards';

export const p_002 = new Card();
p_002.serial_number = 'P-002';
p_002.fr_name = "Partons à l'aventure";
p_002.en_name = 'I Smell Adventure Ahead!';
p_002.jp_name = 'ウソップ';
p_002.cost = 1;
p_002.fr_effect = 'flemme de traduire cette carte.';
p_002.en_effect =
  '[Main] Return all cards in your hand to your deck and shuffle your deck. Then, draw cards equal to the number you returned to your deck.';
p_002.fr_trigger_effect = 'flemme de traduire cette carte.';
p_002.en_trigger_effect = "[Trigger] Activate this card's [Main] effect.";
p_002.set = promotion;
p_002.type = event;
p_002.colors = [red];
p_002.tags = [strawHat];
p_002.rarities = [promotionRare];
p_002.status = unlimited;
