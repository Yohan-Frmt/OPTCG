import {
  banned,
  limited,
  semiLimited,
  unlimited,
} from './cards/utils/status.cards';
import { CardStatus } from '../cards/cardstatus/cardstatus.entity';

export const CardStatusSeed: CardStatus[] = [
  banned,
  limited,
  semiLimited,
  unlimited,
];
