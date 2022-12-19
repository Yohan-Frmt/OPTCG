import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavPaginateComponent } from "./nav-paginate.component";

@NgModule({
  declarations: [
    NavPaginateComponent
  ],
  exports: [
    NavPaginateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavPaginateModule {
}
