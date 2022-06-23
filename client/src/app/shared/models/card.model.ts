import { ICardColor } from './cardcolor.model';
import { ICardType } from './cardtype.model';
import { ICardRarity } from './cardrarity.model';
import { ICardSet } from './cardset.model';
import { ICardImage } from './cardimage.model';
import { ICardErrata } from './carderrata.model';
import { ICardStatus } from './cardstatus.model';

export interface ICard {
  readonly id?: string;
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
