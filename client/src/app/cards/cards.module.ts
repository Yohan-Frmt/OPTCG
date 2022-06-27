import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardModule } from '../shared/components/card/card.module';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FilterModule } from '../shared/components/filter/filter.module';
import { SearchbarModule } from '../shared/components/searchbar/searchbar.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CardsComponent, CardDetailsComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    CardModule,
    FilterModule,
    SearchbarModule,
    DragDropModule,
  ],
  exports: [CardsComponent],
})
export class CardsModule {}
