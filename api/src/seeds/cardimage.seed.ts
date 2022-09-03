import { CardImage } from '../cards/cardimage/cardimage.entity';
import { st1_images } from './cards/st1_images';
import { st2_images } from './cards/st2_images';
import { st3_images } from './cards/st3_images';
import { st4_images } from './cards/st4_images';
import { op1_images } from './cards/op1_images';
import { p_images } from './cards/p_images';

export const CardImageSeed: CardImage[] = [
  ...p_images,
  ...st1_images,
  ...st2_images,
  ...st3_images,
  ...st4_images,
  ...op1_images,
];
