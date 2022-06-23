import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { FormFieldModule } from '../form-field/form-field.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, FormFieldModule, FormsModule],
  exports: [SearchbarComponent],
})
export class SearchbarModule {}
