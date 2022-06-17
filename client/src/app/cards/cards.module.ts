import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardModule } from '../shared/components/card/card.module';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FilterModule } from '../shared/components/filter/filter.module';

@NgModule({
  declarations: [CardsComponent, CardDetailsComponent],
  imports: [CommonModule, CardsRoutingModule, CardModule, FilterModule],
})
export class CardsModule {}
