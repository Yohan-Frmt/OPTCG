import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';
import { AlertModule } from './components/alert/alert.module';
import { CardModule } from './components/card/card.module';
import { SkeletonModule } from './components/skeleton/skeleton.module';
import { DeckPreviewModule } from './components/deck-preview/deck-preview.module';
import { FilterModule } from './components/filter/filter.module';
import { FormFieldModule } from './components/form-field/form-field.module';
import { LogoModule } from './components/logo/logo.module';
import { SearchbarModule } from './components/searchbar/searchbar.module';
import { PipeModule } from './pipes/pipe.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    AlertModule,
    CardModule,
    FormFieldModule,
    LogoModule,
    FilterModule,
    SkeletonModule,
    DeckPreviewModule,
    SearchbarModule,
    PipeModule,
  ],
  exports: [
    NavbarModule,
    AlertModule,
    CardModule,
    FormFieldModule,
    LogoModule,
    FilterModule,
    SkeletonModule,
    DeckPreviewModule,
    SearchbarModule,
    PipeModule,
  ],
})
export class SharedModule {}
