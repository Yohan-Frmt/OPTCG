import { Country } from './country.model';
import { Store } from './store.model';
import { Pronoun } from './pronoun.model';

export interface User {
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly discord?: string;
  readonly isStore: boolean;
  readonly isActive: boolean;
  country: Country;
  stores?: Store[];
  pronouns: Pronoun[];
}
