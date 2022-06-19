import { ICardColor } from './card-color.model';
import { ICardType } from './card-type.model';
import { ICardRarity } from './card-rarity.model';
import { ICardSet } from './card-set.model';
import { ICardImage } from './card-image.model';
import { ICardErrata } from './card-errata.model';
import { ICardStatus } from './card-status.model';

export interface ICard {
  readonly id: string;
  readonly serial_number: string;
  readonly fr_name: string;
  readonly en_name: string;
  readonly jp_name: string;
  readonly cost?: number;
  readonly power?: number;
  readonly life?: number;
  readonly fr_effect?: string;
  readonly en_effect?: string;
  readonly counter?: number;
  readonly set: ICardSet;
  readonly type: ICardType;
  readonly colors: ICardColor[];
  readonly tags: ICardType[];
  readonly images: ICardImage[];
  readonly rarities: ICardRarity[];
  readonly errata?: ICardErrata[];
  readonly status: ICardStatus;
}
