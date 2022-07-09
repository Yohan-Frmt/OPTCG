import { Card } from '../../../cards/card/card.entity';
import { unlimited } from '../utils/status.cards';
import { baroque, warlord } from '../utils/tags.cards';
import { special } from '../utils/attributes.cards';
import { romanceDawn } from '../utils/sets.cards';
import { character } from '../utils/types.cards';
import { blue } from '../utils/colors.cards';
import { superRare } from '../utils/rarities.cards';

export const op1_067 = new Card();
op1_067.serial_number = 'OP01-067';
op1_067.fr_name = 'Crocodile';
op1_067.en_name = 'Crocodile';
op1_067.jp_name = 'クロコダイル';
op1_067.power = 7000;
op1_067.cost = 7;
op1_067.fr_effect = "flemme de trad pour l'instant";
op1_067.en_effect =
  '[Banish] (When this card deals damage, the life card is trashed without activating [Trigger])' +
  '[DON!! x1] Blue Event cards in your hand have their cost reduced by 1.';
op1_067.set = romanceDawn;
op1_067.type = character;
op1_067.colors = [blue];
op1_067.tags = [warlord, baroque];
op1_067.rarities = [superRare];
op1_067.status = unlimited;
op1_067.attribute = special;
