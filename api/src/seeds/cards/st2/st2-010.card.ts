import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { green } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { hawkin, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';
import { slash } from '../utils/attributes.cards';

export const st2_010 = new Card();
st2_010.serial_number = 'ST02-010';
st2_010.fr_name = 'Basil Hawkins';
st2_010.en_name = 'Basil Hawkins';
st2_010.jp_name = 'バジル・ホーキンス';
st2_010.power = 6000;
st2_010.cost = 5;
st2_010.fr_effect = "flemme de trad pour l'instant";
st2_010.en_effect =
  "[DON!! x1] [Once Per Turn] [Your Turn] If this Character battles your opponent's Character, set this card as active.";
st2_010.set = starterWorst;
st2_010.type = character;
st2_010.colors = [green];
st2_010.tags = [supernovas, hawkin];
st2_010.rarities = [common];
st2_010.status = unlimited;
st2_010.attribute = slash;
