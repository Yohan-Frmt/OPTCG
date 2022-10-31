import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonsComponent } from './filter-buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '../form-field/form-field.module';
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [FilterButtonsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    FormsModule,
    PipeModule,
  ],
  exports: [FilterButtonsComponent],
})
export class FilterButtonsModule {}
