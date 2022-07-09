import { Card } from '../../../cards/card/card.entity';
import { character } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHat, supernovas } from '../utils/tags.cards';
import { strike } from '../utils/attributes.cards';
import { promotion } from '../utils/sets.cards';
import { promotionRare } from '../utils/rarities.cards';

export const p_001 = new Card();
p_001.serial_number = 'P-001';
p_001.fr_name = 'Monkey D. Luffy';
p_001.en_name = 'Monkey D. Luffy';
p_001.jp_name = 'モンキー・D・ルフィ';
p_001.power = 7000;
p_001.life = 6;
p_001.fr_effect = 'flemme de traduire cette carte';
p_001.en_effect =
  '[Activation : Main] [Once per turn] Give this Leader or one of your Character one rested DON!! card.';
p_001.set = promotion;
p_001.type = character;
p_001.colors = [red];
p_001.tags = [strawHat, supernovas];
p_001.rarities = [promotionRare];
p_001.status = unlimited;
p_001.attribute = strike;
