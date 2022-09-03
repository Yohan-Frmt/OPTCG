import { ExtendableError } from './ExtendableError.error';

export class DeckColorException extends ExtendableError {
  constructor(private _colors: string[]) {
    let error = `A Deck need to have cards with the colors : ${_colors.join(
      ', ',
    )}.`;
    super(error);
    this.name = this.constructor.name;
  }
}
