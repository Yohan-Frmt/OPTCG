import { Card } from '../../../cards/card/card.entity';
import { starterStraw } from '../utils/sets.cards';
import { event } from '../utils/types.cards';
import { red } from '../utils/colors.cards';
import { unlimited } from '../utils/status.cards';
import { strawHat, supernovas } from '../utils/tags.cards';
import { common } from '../utils/rarities.cards';

export const st1_015 = new Card();
st1_015.serial_number = 'ST01-015';
st1_015.fr_name = 'Gum-Gum Jet Pistol';
st1_015.en_name = 'Gum-Gum Jet Pistol';
st1_015.jp_name = 'ゴムゴムのJET銃';
st1_015.cost = 4;
st1_015.fr_effect =
  "[Auto] Mettez KO un des Personnages de votre adversaire avec une puissance de 6000 ou moins. [Trigger] Activez l'effet [Auto] de cette carte.";
st1_015.en_effect =
  "[Main] KO one of your opponent's Characters with a Power of 6000 or less. [Trigger] Activate this card's [Main] effect.";
st1_015.set = starterStraw;
st1_015.type = event;
st1_015.colors = [red];
st1_015.tags = [strawHat, supernovas];
st1_015.rarities = [common];
st1_015.status = unlimited;
