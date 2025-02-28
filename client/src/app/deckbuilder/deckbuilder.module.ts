import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DeckbuilderRoutingModule } from "./deckbuilder-routing.module";
import { DeckbuilderComponent } from "./deckbuilder.component";
import { CardsModule } from "../cards/cards.module";
import { SharedModule } from "../shared/shared.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [DeckbuilderComponent],
  imports: [
    CommonModule,
    DragDropModule,
    DeckbuilderRoutingModule,
    CardsModule,
    SharedModule,
    FormsModule,
    CKEditorModule
  ]
})
export class DeckbuilderModule {
}
