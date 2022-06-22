import { Pipe, PipeTransform } from '@angular/core';
import { IDeckContent } from '../models';
import { CardService } from '../services/card.service';

@Pipe({
  name: 'deckParser',
})
export class DeckParserPipe implements PipeTransform {
  constructor(private readonly _card: CardService) {}

  transform(value: string, ...args: unknown[]): IDeckContent {
    return JSON.parse(value) as IDeckContent;
  }
}
