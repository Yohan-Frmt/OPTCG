import {
  common,
  leaderRare,
  rare,
  superRare,
  uncommon,
} from './cards/utils/rarities.cards';
import { CardRarity } from '../cards/cardrarity/cardrarity.entity';

export const CardRaritySeed: CardRarity[] = [
  leaderRare,
  uncommon,
  common,
  rare,
  superRare,
];
