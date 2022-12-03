import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeckbuilderComponent } from "./deckbuilder.component";

const routes: Routes = [
  {
    path: "",
    component: DeckbuilderComponent
  },
  {
    path: ":id",
    component: DeckbuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeckbuilderRoutingModule {
}
