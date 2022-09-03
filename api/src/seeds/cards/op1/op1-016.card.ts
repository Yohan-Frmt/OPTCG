import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { strawHat } from '../utils/tags.cards';
import { red } from '../utils/colors.cards';
import { special } from '../utils/attributes.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';

export const op1_016 = new Card();
op1_016.serial_number = 'OP01-016';
op1_016.fr_name = 'Nami';
op1_016.en_name = 'Nami';
op1_016.jp_name = 'クロコダイル';
op1_016.power = 2000;
op1_016.cost = 1;
op1_016.fr_effect = "flemme de trad pour l'instant";
op1_016.en_effect =
  '[On Play] Look at the top 5 cards of your deck, reveal 1 {Straw Hat Crew} type card other then [Nami] and add it to your hand. Place the remaining cards at the bottom of your deck in any order. ';
op1_016.set = romanceDawn;
op1_016.type = character;
op1_016.colors = [red];
op1_016.tags = [strawHat];
op1_016.status = unlimited;
op1_016.attribute = special;
