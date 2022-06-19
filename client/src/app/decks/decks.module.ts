import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecksRoutingModule } from './decks-routing.module';
import { DecksComponent } from './decks.component';
import { DeckModule } from '../shared/components/deck/deck.module';

@NgModule({
  declarations: [DecksComponent],
  imports: [CommonModule, DecksRoutingModule, DeckModule],
})
export class DecksModule {}
