import { IUser } from './user.model';
import { IDeckVisibility } from './deck-visibility.model';

export interface IDeck {
  readonly id: string;
  readonly name: string;
  readonly author: IUser;
  content: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly visibility: IDeckVisibility;
  readonly description: string;
}
