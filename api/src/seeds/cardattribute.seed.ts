import { CardAttribute } from '../cards/cardattribute/cardattribute.entity';
import {
  ranged,
  slash,
  special,
  strike,
  wisdom,
} from './cards/utils/attributes.cards';

export const CardAttributeSeed: CardAttribute[] = [
  special,
  slash,
  strike,
  ranged,
  wisdom,
];
