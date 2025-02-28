import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardsRoutingModule } from "./cards-routing.module";
import { CardsComponent } from "./cards.component";
import { CardModule } from "../shared/components/card/card.module";
import { CardDetailsComponent } from "./card-details/card-details.component";
import { FilterModule } from "../shared/components/filter/filter.module";
import { SearchbarModule } from "../shared/components/searchbar/searchbar.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CardListModule } from "../shared/components/card-list/card-list.module";

@NgModule({
  declarations: [CardsComponent, CardDetailsComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    CardModule,
    FilterModule,
    SearchbarModule,
    DragDropModule,
    SharedModule,
    FontAwesomeModule,
    CardListModule
  ],
  exports: [CardsComponent]
})
export class CardsModule {
}
