import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { event } from '../utils/types.cards';
import { baroque } from '../utils/tags.cards';
import { romanceDawn } from '../utils/sets.cards';
import { blue } from '../utils/colors.cards';
import { common } from '../utils/rarities.cards';

export const op1_087 = new Card();
op1_087.serial_number = 'OP01-087';
op1_087.fr_name = 'Officer Agent';
op1_087.en_name = 'Officer Agent';
op1_087.jp_name = 'クロコダイル';
op1_087.cost = 2;
op1_087.fr_effect = "flemme de trad pour l'instant";
op1_087.en_effect =
  '[Counter] Play up to 1 {Baroque Works} type Character that costs 3 or less from your hand.';
op1_087.fr_trigger_effect = "flemme de trad pour l'instant";
op1_087.en_trigger_effect = "Activate this card's [Counter] effect.";
op1_087.set = romanceDawn;
op1_087.type = event;
op1_087.colors = [blue];
op1_087.tags = [baroque];
op1_087.rarities = [common];
op1_087.status = unlimited;
