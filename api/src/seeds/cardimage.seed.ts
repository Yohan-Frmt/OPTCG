import { st1_images } from './cards/st1_images';
import { CardImage } from '../cards/cardimage/cardimage.entity';
import { st2_images } from './cards/st2_images';
import { st3_images } from './cards/st3_images';
import { st4_images } from './cards/st4_images';

export const CardImageSeed: CardImage[] = [
  ...st1_images,
  ...st2_images,
  ...st3_images,
  ...st4_images,
];
