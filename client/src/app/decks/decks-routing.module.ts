import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksComponent } from './decks.component';
import { DeckDetailsComponent } from './deck-details/deck-details.component';

const routes: Routes = [
  {
    path: '',
    component: DecksComponent,
  },
  {
    path: ':id',
    component: DeckDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecksRoutingModule {}
