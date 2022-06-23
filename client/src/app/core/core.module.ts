import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { CONFIG } from './tokens';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: CONFIG, useValue: environment }],
})
export class CoreModule {}
