import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './core/authentication/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'decks',
    loadChildren: () =>
      import('./decks/decks.module').then((m) => m.DecksModule),
  },
  {
    path: 'deckbuilder',
    loadChildren: () =>
      import('./deckbuilder/deckbuilder.module').then(
        (m) => m.DeckbuilderModule,
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
