import { ExtendableError } from './ExtendableError.error';

export class XCopiesMaxException extends ExtendableError {
  constructor(private _cardName: string, private _maxAmount: number) {
    let error = `${_cardName} can't be added to the deck because it has reached its maximum amount of ${_maxAmount} copies.`;
    if (_maxAmount === 1) error = error.replace('copies', 'copy');
    super(error);
    this.name = this.constructor.name;
  }
}
