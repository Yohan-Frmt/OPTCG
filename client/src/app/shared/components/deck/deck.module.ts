import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [DeckComponent],
  exports: [DeckComponent],
  imports: [CommonModule, CardModule],
})
export class DeckModule {}
