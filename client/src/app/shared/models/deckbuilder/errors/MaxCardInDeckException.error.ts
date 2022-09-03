import { ExtendableError } from './ExtendableError.error';

export class MaxCardInDeckException extends ExtendableError {
  constructor(private _max: number) {
    let error = `A Deck can't have more than ${_max} cards.`;
    super(error);
    this.name = this.constructor.name;
  }
}
