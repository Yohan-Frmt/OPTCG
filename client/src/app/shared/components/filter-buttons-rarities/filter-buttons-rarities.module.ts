import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonsRaritiesComponent } from './filter-buttons-rarities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '../form-field/form-field.module';
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [FilterButtonsRaritiesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    FormsModule,
    PipeModule,
  ],
  exports: [FilterButtonsRaritiesComponent],
})
export class FilterButtonsRaritiesModule {}
