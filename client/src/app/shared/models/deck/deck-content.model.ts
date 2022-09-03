import { ICard } from '../card/card.model';

export interface IDeckContent {
  readonly leader: ICard;
  readonly cards: ICard[];
}
