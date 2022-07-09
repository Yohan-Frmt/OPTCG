import { Card } from '../../../cards/card/card.entity';
import { promotion } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { purple } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { beast, emperors } from '../utils/tags.cards';
import { promotionRare } from '../utils/rarities.cards';
import { strike } from '../utils/attributes.cards';

export const p_005 = new Card();
p_005.serial_number = 'P-005';
p_005.fr_name = 'Kaido';
p_005.en_name = 'Kaido';
p_005.jp_name = 'ジンベ';
p_005.power = 8000;
p_005.cost = 7;
p_005.fr_effect = 'flemme de traduire cette carte';
p_005.en_effect =
  '[Activate: Main] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains [Banish] during this turn.' +
  '(When this card deals damage, the target card is trashed without activating its Trigger.)';
p_005.set = promotion;
p_005.type = character;
p_005.colors = [purple];
p_005.tags = [emperors, beast];
p_005.rarities = [promotionRare];
p_005.status = unlimited;
p_005.attribute = strike;
