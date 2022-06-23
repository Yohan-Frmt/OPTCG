import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecksRoutingModule } from './decks-routing.module';
import { DecksComponent } from './decks.component';
import { DeckPreviewModule } from '../shared/components/deck/deck-preview.module';
import { DeckDetailsComponent } from './deck-details/deck-details.component';
import { CardModule } from '../shared/components/card/card.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DecksComponent, DeckDetailsComponent],
  imports: [
    CommonModule,
    DecksRoutingModule,
    CardModule,
    DeckPreviewModule,
    SharedModule,
  ],
})
export class DecksModule {}
