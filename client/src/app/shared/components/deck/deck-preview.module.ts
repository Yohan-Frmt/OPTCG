import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckPreviewComponent } from './deck-preview.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [DeckPreviewComponent],
  exports: [DeckPreviewComponent],
  imports: [CommonModule, CardModule],
})
export class DeckPreviewModule {}
