import { Card } from '../../../cards/card/card.entity';
import { starterWorst } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { kuja, warlord } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st3_017 = new Card();
st3_017.serial_number = 'ST03-017';
st3_017.fr_name = 'Love-Love Mellow';
st3_017.en_name = 'Love-Love Mellow';
st3_017.jp_name = '藁備手刀';
st3_017.cost = 2;
st3_017.fr_effect = "flemme de trad pour l'instant";
st3_017.en_effect =
  '[Counter] Your Leader or 1 of your Characters gains +4000 power during this battle. Then, draw 1 card if you have 3 or less cards in your hand.';
st3_017.set = starterWorst;
st3_017.type = event;
st3_017.colors = [blue];
st3_017.tags = [warlord, kuja];
st3_017.rarities = [common];
st3_017.status = unlimited;
