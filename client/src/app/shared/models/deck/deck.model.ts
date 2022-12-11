import { IDeckVisibility } from "./deck-visibility.model";

export interface IDeck {
  readonly id?: string;
  readonly name: string;
  readonly author_id: string;
  readonly content: any;
  readonly visibility: string | IDeckVisibility;
  readonly description: string;
}
