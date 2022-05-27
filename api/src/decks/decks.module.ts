import { Module } from '@nestjs/common';
import { DeckVisibilityModule } from './deckvisibility/deckvisibility.module';
import { DeckModule } from './deck/deck.module';

@Module({
  imports: [DeckVisibilityModule, DeckModule],
})
export class DecksModule {}
