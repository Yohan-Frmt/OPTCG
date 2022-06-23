import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHatPirates } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st1_016 = new Card();
st1_016.serial_number = 'ST01-016';
st1_016.fr_name = 'Jambe à la Diable';
st1_016.en_name = 'Diable Jambe';
st1_016.jp_name = '悪魔風脚';
st1_016.cost = 1;
st1_016.fr_effect =
  '[Auto] Choisissez votre Leader ou un de vos Personnages ~Équipage au chapeau de paille~. Pendant ce tour, votre adversaire ne peut pas activer de [Bloqueur] quand ce Leader ou Personnage attaque. [Trigger] Mettez KO un des Personnages avec [Bloqueur] de votre adversaire avec un Cout de 3 ou moins';
st1_016.en_effect =
  "[Main] Choose your Leader or one of your Characters ~Straw Hat Crew~. During this turn, your opponent cannot activate [Blocker] when that Leader or Character attacks. [Trigger] KO one of your opponent's Characters with a Cost of 3 or less with [Blocker].";
st1_016.set = starterStraw;
st1_016.type = event;
st1_016.colors = [red];
st1_016.tags = [strawHatPirates];
st1_016.rarities = [common];
st1_016.status = unlimited;
