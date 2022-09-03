import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { hawkin, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st2_017 = new Card();
st2_017.serial_number = 'ST02-017';
st2_017.fr_name = 'Straw Sword';
st2_017.en_name = 'Straw Sword';
st2_017.jp_name = '藁備手刀';
st2_017.cost = 2;
st2_017.fr_effect = "flemme de trad pour l'instant";
st2_017.en_effect =
  "[Main] Rest 1 of your opponent's Characters. [Trigger] Play 1 {Supernovas} type card with a cost of 2 or less from your hand.";
st2_017.set = starterWorst;
st2_017.type = event;
st2_017.colors = [green];
st2_017.tags = [supernovas, hawkin];
st2_017.rarities = [common];
st2_017.status = unlimited;
