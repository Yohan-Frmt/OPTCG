import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { animal, strawHat } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { uncommon } from '../utils/rarities.cards';
import { wisdom } from '../utils/attributes.cards';

export const op1_015 = new Card();
op1_015.serial_number = 'OP01-015';
op1_015.fr_name = 'Tony Tony Chopper';
op1_015.en_name = 'Tony Tony Chopper';
op1_015.jp_name = 'クロコダイル';
op1_015.power = 4000;
op1_015.cost = 3;
op1_015.fr_effect = "flemme de trad pour l'instant";
op1_015.en_effect =
  '[DON!! x1] [When Attacking] (Trash 1 of your cards from your hand): Put 1 {Straw Hat Crew} type Character other than [Tony Tony Chopper] with a cost of 4 or less from your Trash into your hand.';
op1_015.set = romanceDawn;
op1_015.type = character;
op1_015.colors = [red];
op1_015.tags = [animal, strawHat];
op1_015.rarities = [uncommon];
op1_015.status = unlimited;
op1_015.attribute = wisdom;
