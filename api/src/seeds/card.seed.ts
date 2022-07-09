import { Card } from '../cards/card/card.entity';
import { st1 } from './cards/st1';
import { st2 } from './cards/st2';
import { st3 } from './cards/st3';
import { st4 } from './cards/st4';
import { op1 } from './cards/op1';
import { p } from './cards/p';

export const CardSeed: Card[] = [...p, ...st1, ...st2, ...st3, ...st4, ...op1];
