import { IStore } from './store.model';
import { ICountry } from './country.model';
import { IPronoun } from './pronoun.model';

export interface IUser {
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly discord?: string;
  readonly isStore: boolean;
  readonly isActive: boolean;
  country: ICountry;
  stores?: IStore[];
  pronouns: IPronoun[];
}
