import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '../form-field/form-field.module';
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    FormsModule,
    PipeModule,
  ],
  exports: [FilterComponent],
})
export class FilterModule {}
