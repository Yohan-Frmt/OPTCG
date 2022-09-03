import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckbuilderRoutingModule } from './deckbuilder-routing.module';
import { DeckbuilderComponent } from './deckbuilder.component';
import { CardsModule } from '../cards/cards.module';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DeckbuilderComponent],
  imports: [
    CommonModule,
    DragDropModule,
    DeckbuilderRoutingModule,
    CardsModule,
    SharedModule,
  ],
})
export class DeckbuilderModule {}
